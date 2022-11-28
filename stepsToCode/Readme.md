# Steps to code CLI Number Guessing Game

### 1. Project initiation

- Create and navigate to project directory using following commands

  ```cmd
  mkdir wmd-ts-number-game
  cd wmd-ts-number-game
  ```

- Intilize a node project in the newly created directory using following command, this will create a `package.json` file.

  ```cmd
  npm init -y
  ```

- Create a `tsconfig.json` file to define typescript configration using following command

  ```cmd
  tsc --init
  ```

- Create two more directories to be used as root and out directory using

  ```cmd
  mkdir src
  mkdir dist
  ```

- Update `tsconfig.json` to include above directories and also change module and moduleResolution

  ```json
  "target": "ES2022",
  "module": "NodeNext",
  "rootDir": "./src",
  "moduleResolution": "NodeNext",
  "outDir": "./dist",
  ```

- Update `package.json` and add following content to it

  ```json
  "main": "./dist/index.js",
  "type": "module",
  "scripts": {
      "start": "node ."
  },
  "bin": "./dist/index.js",
  ```

### 2. Install dependencies

- Multiple third-party packages to be used in this project so install different dependacies using following commands

  ```cmd
  npm install inquirer
  npm install chalk
  npm install chalk-animation
  npm install ora
  npm install random-int
  ```

- Install types for the installed dependancies for the development using following set of commands

  ```cmd
  npm install --save-dev @types/inquirer
  npm install --save-dev @types/chalk
  npm install --save-dev @types/chalk-animation
  npm install --save-dev @types/ora
  npm install --save-dev @types/random-int
  ```

- After installation `package.json` file will be updated and `package-lock.json` file along with `node_modules` folder will be created. We don't need git to track newly created files and folders so create a `.gitignore` file with the following content

  ```gitignore
  node_modules
  package-lock.json
  ```

### 3. Create Hello World app

- To check if everything is setup properly first create a hello world. All the typescript files should be created in `./src` directory. Create a `index.ts` file with the following content

  ```ts
  console.log('Hello World!');
  ```

- To transpile our code to javascript we can use any of the following command, one thing to rember we need to use first command every time we make a change and the second one automatically create js files on every change. So we are going to use the latter one. All the js files will be stored in the `./dist` folder as we declared in our `tsconfig.json` file earlier.

  ```cmd
  tsc
  tsc -w
  ```

- to run the js file we can use any of the following commands

  ```cmd
  node .\dist\index.js
  node .
  npm start
  ```

- If everything is right we will have a console output.

### 4. Create welcome message

- Create `welcomeMessage.ts` will the following content to display welcome message to the user

  ```ts
  import chalkAnimation from 'chalk-animation';
  import chalk from 'chalk';
  let t1: string = chalk.inverse.bold('\n****************************\n');
  let t2: string = chalk.inverse.bold('***');
  let t3: string = chalk.greenBright.italic(' Number Guessing Game ');
  async function msg1Promise(
    t1: string,
    t2: string,
    t3: string
  ): Promise<boolean> {
    console.clear();
    console.log(`${t1 + t2 + t3 + t2 + t1}`);
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 700);
    });
  }
  async function msg2Promise(): Promise<boolean> {
    console.clear();
    let radar = chalkAnimation.radar(
      '\n****************************\n*** Number Guessing Game ***\n****************************\n',
      0.6
    );
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        radar.stop();
        resolve(true);
      }, 3200);
    });
  }
  async function wellcomeMessage(): Promise<void> {
    await msg1Promise(t1, t2, t3);
    await msg2Promise();
    await msg1Promise(t1, t2, t3);
  }
  async function wellcomeMessageStatic(): Promise<void> {
    await msg1Promise(t1, t2, t3);
  }
  export { wellcomeMessage, wellcomeMessageStatic };
  ```

- All the functions are called through `index.ts` so update it with the following content

  ```ts
  #!/usr/bin/env node
  import { wellcomeMessage } from './welcomeMessage.js';
  (async (): Promise<void> => {
    await wellcomeMessage();
  })();
  ```

### 5. Display Instructions to play

- Create `instructions.ts` will the following content to display instructions on how to play the game

  ```ts
  import chalk from 'chalk';
  async function instructions(): Promise<boolean> {
    return await new Promise<boolean>((resolve) => {
      console.log(chalk.cyan('How to play : '));
      console.log('\tA randowm number between 1 to 20 will be generated');
      console.log('\tTo win, guess the number');
      console.log('\tYou can play in any of the following mode\n');
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });
  }
  export { instructions };
  ```

- Update `index.ts` to call instructions function

  ```ts
  import { instructions } from './instructions.js';
  await instructions();
  ```

### 6. Display Modes to play in

- Create `modes.ts` will the following content to display different modes available in the game

  ```ts
  import chalk from 'chalk';
  async function modesOfGame(mode: string): Promise<boolean> {
    function newbie() {
      console.log(chalk.yellow('\tNewbie : '));
      console.log('\t\tUnlimited number of tries');
      console.log('\t\tA hint on each wrong guess');
      console.log('\t\tNumber to guess remains the same on wrong guess');
    }
    function beginner() {
      console.log(chalk.yellow('\tBeginner : '));
      console.log('\t\tLimited (10) number of tries');
      console.log('\t\tA hint on each wrong guess');
      console.log('\t\tNumber to guess remains the same on wrong guess');
    }
    function proficient() {
      console.log(chalk.yellow('\tProficient : '));
      console.log('\t\tLimited (8) number of tries');
      console.log('\t\tNo hint after wrong guess');
      console.log('\t\tNumber to guess remains the same on wrong guess');
    }
    function expert() {
      console.log(chalk.yellow('\tExpert : '));
      console.log('\t\tLimited (5) number of tries');
      console.log('\t\tNo hint after wrong guess');
      console.log('\t\tNumber to guess changes on wrong guess');
    }
    return await new Promise<boolean>((resolve) => {
      switch (mode) {
        case 'Newbie':
          console.log(chalk.cyan('\nSelected Mode : '));
          newbie();
          console.log('\t\tTo quit app at any time enter 4815162342\n');
          break;
        case 'Beginner':
          console.log(chalk.cyan('\nSelected Mode : '));
          beginner();
          console.log('\t\tTo quit app at any time enter 4815162342\n');
          break;
        case 'Proficient':
          console.log(chalk.cyan('\nSelected Mode : '));
          proficient();
          console.log('\t\tTo quit app at any time enter 4815162342\n');
          break;
        case 'Expert':
          console.log(chalk.cyan('\nSelected Mode : '));
          expert();
          console.log('\t\tTo quit app at any time enter 4815162342\n');
          break;
        default:
          console.log(chalk.cyan('Modes : '));
          newbie();
          beginner();
          proficient();
          expert();
          console.log('\n');
          break;
      }
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });
  }
  export { modesOfGame };
  ```

- Update `index.ts` to call modes function

  ```ts
  import { modesOfGame } from './modes.js';
  await modesOfGame('all');
  ```

### 7. Ask user to play or quit

- create `askToPlay.ts` to define a function which asks the user to play game or quit the app

  ```ts
  import inquirer from 'inquirer';
  async function askToPlay(): Promise<any> {
    enum Commands {
      Use = 'Play Game',
      Quit = 'Quit App',
    }
    const startAppC = await inquirer.prompt([
      {
        message: 'Do you wan to continue ? ',
        name: 'startApp',
        type: 'list',
        choices: Object.values(Commands),
      },
    ]);
    return startAppC['startApp'];
  }
  export { askToPlay };
  ```

- Update `index.ts` to call above function

  ```ts
  import { askToPlay } from './askToPlay.js';
  let askToPlayChoice = await askToPlay();
  ```

### 8. Display some animation before opening game

- create `startApp.ts` to define a function which displays some animaton before opeing the app

  ```ts
  import ora, { Ora } from 'ora';
  import chalk from 'chalk';
  function startApp(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      console.log('');
      const spinner: Ora = ora(chalk.green(' Starting App '));
      spinner.color = 'yellow';
      spinner.start();
      setTimeout(() => {
        spinner.stop();
        console.clear();
        resolve(true);
      }, 1500);
    });
  }
  export { startApp };
  ```

### 9. Create function to quit app

- create `quitApp.ts` to define a function which quits the app after displaying some animation

  ```ts
  import ora, { Ora } from 'ora';
  import chalk from 'chalk';
  function quitApp(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      console.log('');
      const spinner: Ora = ora(chalk.magenta(' See You Again '));
      spinner.spinner = 'material';
      spinner.color = 'magenta';
      spinner.start();
      setTimeout(() => {
        spinner.color = 'red';
        spinner.text = chalk.bgRed(' Closing App ! ');
      }, 1500);
      setTimeout(() => {
        spinner.stop();
        console.clear();
        resolve(true);
      }, 3000);
    });
  }
  export { quitApp };
  ```

### 10. Update app based on user choice

- update `index.ts` to call startapp or quit app based on user choice and displays a message when app starts up

  ```ts
  import { wellcomeMessageStatic } from './welcomeMessage.js';
  import { quitApp } from './quitApp.js';
  import { startApp } from './startApp.js';
  if (askToPlayChoice === 'Play Game') {
    await startApp();
    let playAgainCheck = true;
    while (playAgainCheck) {
      await wellcomeMessageStatic();
    }
  } else {
    await quitApp();
  }
  ```

### 11. Ask user to select mode

- create `askForMode.ts` to ask user to select mode to play in

  ```ts
  import inquirer from 'inquirer';
  async function askForMode(): Promise<any> {
    enum Commands {
      Newbie = 'Newbie',
      Beginner = 'Beginner',
      Proficient = 'Proficient',
      Expert = 'Expert',
    }
    const selectModeC = await inquirer.prompt([
      {
        message: 'Select Mode ? ',
        name: 'selectMode',
        type: 'list',
        choices: Object.values(Commands),
      },
    ]);
    return selectModeC['selectMode'];
  }
  export { askForMode };
  ```

- update `index.ts` to call above function and based on user choise displays instruction

  ```ts
  import { askForMode } from './askForMode.js';
  let selectedMode = await askForMode();
  await modesOfGame(selectedMode);
  ```

### 12. Ask user to guess number

- Create `askNumber.ts` to ask user to guess the number

  ```ts
  // Ask user to guess the number
  import inquirer from 'inquirer';
  async function askNumber(guessNumber: number): Promise<number> {
    let number = await inquirer.prompt([
      {
        message: `Guess the number (try no. ${guessNumber}) : `,
        type: 'number',
        name: 'guessedNumber',
      },
    ]);
    return number.guessedNumber;
  }
  export { askNumber };
  ```

### 13. Create a hint to display on wrong guess

- Create `hint.ts` to display a message to be displayed based on miltiple cases

  ```ts
  import chalk from 'chalk';
  function hint(
    guessedNumber: number,
    generatedNumber: number,
    selectedMode: string,
    guessNumber: number
  ) {
    if (selectedMode === 'Expert') {
      return `, Number of ${chalk.red(
        `tries left : ${5 - guessNumber}`
      )} \n   new Number Generated : ${chalk.inverse(`******`)}`;
    } else if (selectedMode === 'Beginner') {
      return `, Number of ${chalk.red(
        `tries left : ${10 - guessNumber}`
      )} \n   ${
        guessedNumber < generatedNumber
          ? `Guess a ${chalk.red(`higher`)} number `
          : `Guess a ${chalk.red(`lower`)} number`
      }`;
    } else if (selectedMode === 'Proficient') {
      return `, Number of ${chalk.red(`tries left : ${8 - guessNumber}`)} \n`;
    } else {
      if (guessedNumber < generatedNumber) {
        return `, Guess a ${chalk.red(`higher`)} number `;
      } else {
        return `, Guess a ${chalk.red(`lower`)} number`;
      }
    }
  }
  export { hint };
  ```

### 14. Create a function to suspend game at any time

- create `quitMidway.ts` to ask user in case he opts to quit the app any time

  ```ts
  import inquirer from 'inquirer';
  async function quitMidway(): Promise<string> {
    console.log('');
    type QuitMidwayResponse = { quitMidway: string };
    let quitMidwayResponse: QuitMidwayResponse = await inquirer.prompt([
      {
        message: `Do You wan't to quit the game Midway ? `,
        type: 'list',
        name: 'quitMidway',
        choices: ['⛔ Yes', '👍 No'],
      },
    ]);
    return quitMidwayResponse.quitMidway;
  }
  export { quitMidway };
  ```

### 15. Ask user to playagain

- create `playAgain.ts` to ask user to play the game again

  ```ts
  import inquirer from 'inquirer';
  async function playAgain(): Promise<string> {
    console.log('');
    type PlayAgainResponse = { playAgain: string };
    let playAgainResponse: PlayAgainResponse = await inquirer.prompt([
      {
        message: `Do You wan't to play again ? `,
        type: 'list',
        name: 'playAgain',
        choices: ['👍 Yes', '⛔ No'],
      },
    ]);
    return playAgainResponse.playAgain;
  }
  export { playAgain };
  ```
