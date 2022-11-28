// Ask user to select mode
import inquirer from 'inquirer';
/**********************************************************************/
// Ask user for choices if to select mode
// return the answer
async function askForMode() {
    let Commands;
    (function (Commands) {
        Commands["Newbie"] = "Newbie";
        Commands["Beginner"] = "Beginner";
        Commands["Proficient"] = "Proficient";
        Commands["Expert"] = "Expert";
    })(Commands || (Commands = {}));
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
