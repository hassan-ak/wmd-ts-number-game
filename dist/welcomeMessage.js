// Prints a Welcome message on start of the app
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';
/**********************************************************************/
// A bit-styled text for welcome message
let t1 = chalk.inverse.bold('\n****************************\n');
let t2 = chalk.inverse.bold('***');
let t3 = chalk.greenBright.italic(' Number Guessing Game ');
/**********************************************************************/
// Clears screen on startup
// console styled startup message
// wait for 1 sec to proceed to next step
async function msg1Promise(t1, t2, t3) {
    console.clear();
    console.log(`${t1 + t2 + t3 + t2 + t1}`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 700);
    });
}
/**********************************************************************/
// Clears screen
// apply animation on welcome message
// wait for 3.2 sec to proceed to next step
async function msg2Promise() {
    console.clear();
    let radar = chalkAnimation.radar('\n****************************\n*** Number Guessing Game ***\n****************************\n', 0.6);
    return new Promise((resolve) => {
        setTimeout(() => {
            radar.stop();
            resolve(true);
        }, 3200);
    });
}
/**********************************************************************/
// run above function in a sequence
async function wellcomeMessage() {
    await msg1Promise(t1, t2, t3);
    await msg2Promise();
    await msg1Promise(t1, t2, t3);
}
/**********************************************************************/
// Display welcome message with out any animation
// Just a static title when playing the game
async function wellcomeMessageStatic() {
    await msg1Promise(t1, t2, t3);
}
/**********************************************************************/
export { wellcomeMessage, wellcomeMessageStatic };
