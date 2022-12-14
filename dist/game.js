// Number guessing game
import chalk from 'chalk';
import { hint } from './hint.js';
import randomInteger from 'random-int';
import { askNumber } from './askNumber.js';
import { playAgain } from './playAgain.js';
import { quitMidway } from './quitMidway.js';
/**********************************************************************/
// game
// Function to play the game
// generate a random no between 1 and 20
async function game(selectedMode) {
    //
    /**********************************************************************/
    // try #
    let guessNumber = 1;
    // to close when completed or decided to quit
    let startGuessing = true;
    // response to play again
    let playAgainResponse = 'ā No';
    // response to quit midway
    let quitMidwayResponse = 'š No';
    /**********************************************************************/
    // genrate random number and console as a string
    let generatedNumber = randomInteger(1, 20);
    console.log(`Random Number Generated : ${chalk.inverse(`******`)}\n`);
    /**********************************************************************/
    // start asking for guess in a loop
    while (startGuessing) {
        /**********************************************************************/
        // conditonal chesck on mode and number of tries
        if (selectedMode === 'Newbie' ||
            (selectedMode === 'Beginner' && guessNumber <= 10) ||
            (selectedMode === 'Proficient' && guessNumber <= 8) ||
            (selectedMode === 'Expert' && guessNumber <= 5)) {
            // ask for number
            let guessedNumber = await askNumber(guessNumber);
            /**********************************************************************/
            // when correct answer is guessed
            if (guessedNumber === generatedNumber) {
                // console a success message
                console.log(`\nš š š ${chalk.bgGreen.bold(' Congratulation ')}: You guessed the number in ${chalk.magenta(guessNumber)} tries.\n`);
                // set loop to false and ask to play again
                startGuessing = false;
                playAgainResponse = await playAgain();
            }
            /**********************************************************************/
            // when specific number is guessed prompt to quit
            // also confirm and then to play again
            else if (guessedNumber === 4815162342) {
                // ask to quit
                quitMidwayResponse = await quitMidway();
                // if not decrease try no else terminate loop and ask to play again
                if (quitMidwayResponse === 'š No') {
                    guessNumber > 1 ? (guessNumber -= 1) : guessNumber;
                    console.log('');
                }
                else {
                    startGuessing = false;
                    playAgainResponse = await playAgain();
                }
            }
            /**********************************************************************/
            // in case of wrong guess
            // displays a message + hint
            // in case of expert mode generate new number
            else {
                if (selectedMode === 'Expert') {
                    generatedNumber = randomInteger(1, 20);
                }
                console.log(`\nā Wrong Answer${hint(guessedNumber, generatedNumber, selectedMode, guessNumber)}\n`);
                // increase try number after each guess
                guessNumber += 1;
            }
        }
        /**********************************************************************/
        // console a mesasage when lost
        // ask for play gain
        else {
            console.log(`\nā ļøā ļøā ļø ${chalk.bgRed('You lost the game.')} ā ļøā ļøā ļø\n`);
            startGuessing = false;
            playAgainResponse = await playAgain();
        }
    }
    /**********************************************************************/
    // returns a value of play again
    // to be used to quit app
    return playAgainResponse;
}
/**********************************************************************/
export { game };
