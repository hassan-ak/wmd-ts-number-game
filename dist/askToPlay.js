// Ask user to play or quit the game
import inquirer from 'inquirer';
/**********************************************************************/
// Ask user for choices if to play game or quit app
// return the answer
async function askToPlay() {
    let Commands;
    (function (Commands) {
        Commands["Use"] = "Play Game";
        Commands["Quit"] = "Quit App";
    })(Commands || (Commands = {}));
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
/**********************************************************************/
export { askToPlay };
