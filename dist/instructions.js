// Prints instructions for playing this game
import chalk from 'chalk';
/**********************************************************************/
// Function to print instruction
// wait 1.5 seconds befor displaying the message
async function instructions() {
    return await new Promise((resolve) => {
        console.log(chalk.cyan('How to play : '));
        console.log('\tA randowm number between 1 to 20 will be generated');
        console.log('\tTo win, guess the number');
        console.log('\tYou can play in any of the following mode\n');
        setTimeout(() => {
            resolve(true);
        }, 1500);
    });
}
/**********************************************************************/
export { instructions };
