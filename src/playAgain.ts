// Ask User to play again
import inquirer from 'inquirer';

/**********************************************************************/
// play again prompt
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

/**********************************************************************/
export { playAgain };
