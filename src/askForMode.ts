// Ask user to select mode
import inquirer from 'inquirer';

/**********************************************************************/
// Ask user for choices if to select mode
// return the answer
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

/**********************************************************************/
export { askForMode };
