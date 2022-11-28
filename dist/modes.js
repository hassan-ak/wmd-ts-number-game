// Prints modes of playing the game
import chalk from 'chalk';
/**********************************************************************/
// Function to print modes
// wait 1.5 seconds displaying the message
// If it is on welcome page display all modes
// when playing game only display respective mode
async function modesOfGame(mode) {
    /**********************************************************************/
    function newbie() {
        console.log(chalk.yellow('\tNewbie : '));
        console.log('\t\tUnlimited number of tries');
        console.log('\t\tA hint on each wrong guess');
        console.log('\t\tNumber to guess remains the same on wrong guess');
    }
    /**********************************************************************/
    function beginner() {
        console.log(chalk.yellow('\tBeginner : '));
        console.log('\t\tLimited (10) number of tries');
        console.log('\t\tA hint on each wrong guess');
        console.log('\t\tNumber to guess remains the same on wrong guess');
    }
    /**********************************************************************/
    function proficient() {
        console.log(chalk.yellow('\tProficient : '));
        console.log('\t\tLimited (8) number of tries');
        console.log('\t\tNo hint after wrong guess');
        console.log('\t\tNumber to guess remains the same on wrong guess');
    }
    /**********************************************************************/
    function expert() {
        console.log(chalk.yellow('\tExpert : '));
        console.log('\t\tLimited (5) number of tries');
        console.log('\t\tNo hint after wrong guess');
        console.log('\t\tNumber to guess changes on wrong guess');
    }
    return await new Promise((resolve) => {
        /**********************************************************************/
        switch (mode) {
            case 'Newbie':
                console.log(chalk.cyan('\nSelected Mode : '));
                newbie();
                console.log('\t\tTo quit app at any time enter 4815162342\n');
                break;
            case 'Beginner':
                console.log(chalk.cyan('\nSelected Mode : '));
                beginner();
                console.log('\t\tTo quit app at any time enter 4815162342\n');
                break;
            case 'Proficient':
                console.log(chalk.cyan('\nSelected Mode : '));
                proficient();
                console.log('\t\tTo quit app at any time enter 4815162342\n');
                break;
            case 'Expert':
                console.log(chalk.cyan('\nSelected Mode : '));
                expert();
                console.log('\t\tTo quit app at any time enter 4815162342\n');
                break;
            default:
                console.log(chalk.cyan('Modes : '));
                newbie();
                beginner();
                proficient();
                expert();
                console.log('\n');
                break;
        }
        /**********************************************************************/
        setTimeout(() => {
            resolve(true);
        }, 1500);
    });
}
/**********************************************************************/
export { modesOfGame };
