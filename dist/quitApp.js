// Quit App while displaying some animations
import ora from 'ora';
import chalk from 'chalk';
/**********************************************************************/
// Animation to quit app
function quitApp() {
    return new Promise((resolve) => {
        console.log('');
        // use ora to display an animation with a text
        const spinner = ora(chalk.magenta(' See You Again '));
        spinner.spinner = 'material';
        spinner.color = 'magenta';
        spinner.start();
        // update text and color
        setTimeout(() => {
            spinner.color = 'red';
            spinner.text = chalk.bgRed(' Closing App ! ');
        }, 1500);
        // stop anmation and clear console
        setTimeout(() => {
            spinner.stop();
            console.clear();
            resolve(true);
        }, 3000);
    });
}
/**********************************************************************/
export { quitApp };
