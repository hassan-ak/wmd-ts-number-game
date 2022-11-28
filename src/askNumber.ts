// Ask user to guess the number
import inquirer from 'inquirer';

/**********************************************************************/
// Ask user for a number
// While prompting also display try number
async function askNumber(guessNumber: number): Promise<number> {
  let number = await inquirer.prompt([
    {
      message: `Guess the number (try no. ${guessNumber}) : `,
      type: 'number',
      name: 'guessedNumber',
    },
  ]);
  return number.guessedNumber;
}

/**********************************************************************/
export { askNumber };
