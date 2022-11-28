// Ask useer to suspend game
import inquirer from 'inquirer';

/**********************************************************************/
// Ask User Quit Midway
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

/**********************************************************************/
export { quitMidway };
