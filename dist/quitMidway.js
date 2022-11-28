// Ask useer to suspend game
import inquirer from 'inquirer';
/**********************************************************************/
// Ask User Quit Midway
async function quitMidway() {
    console.log('');
    let quitMidwayResponse = await inquirer.prompt([
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
