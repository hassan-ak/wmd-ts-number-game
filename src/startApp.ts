// Animation before starting the app
import ora, { Ora } from 'ora';
import chalk from 'chalk';

/**********************************************************************/
// Create an animation with Ora
// Display for some time
// Then stops
// Clear screen
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

/**********************************************************************/
export { startApp };
