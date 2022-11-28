// Create a hint to display on wrong guess
import chalk from 'chalk';
/**********************************************************************/
// hint to diplsay in case of wrong guess
// check for remaining guesses when required
// hint based on mode selected
function hint(guessedNumber, generatedNumber, selectedMode, guessNumber) {
    if (selectedMode === 'Expert') {
        return `, Number of ${chalk.red(`tries left : ${5 - guessNumber}`)} \n   new Number Generated : ${chalk.inverse(`******`)}`;
    }
    else if (selectedMode === 'Beginner') {
        return `, Number of ${chalk.red(`tries left : ${10 - guessNumber}`)} \n   ${guessedNumber < generatedNumber
            ? `Guess a ${chalk.red(`higher`)} number `
            : `Guess a ${chalk.red(`lower`)} number`}`;
    }
    else if (selectedMode === 'Proficient') {
        return `, Number of ${chalk.red(`tries left : ${8 - guessNumber}`)} \n`;
    }
    else {
        if (guessedNumber < generatedNumber) {
            return `, Guess a ${chalk.red(`higher`)} number `;
        }
        else {
            return `, Guess a ${chalk.red(`lower`)} number`;
        }
    }
}
/**********************************************************************/
export { hint };
