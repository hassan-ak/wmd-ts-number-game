#!/usr/bin/env node

// Number guessing game
import { game } from './game.js';
import { quitApp } from './quitApp.js';
import { modesOfGame } from './modes.js';
import { startApp } from './startApp.js';
import { askToPlay } from './askToPlay.js';
import { instructions } from './instructions.js';
import { wellcomeMessage, wellcomeMessageStatic } from './welcomeMessage.js';
import { askForMode } from './askForMode.js';

/**********************************************************************/
// Call all app functions in a particular sequence
(async (): Promise<void> => {
  await wellcomeMessage();
  await instructions();
  // display all modes
  await modesOfGame('all');
  let askToPlayChoice = await askToPlay();
  // based on user choise start or quit app
  if (askToPlayChoice === 'Play Game') {
    await startApp();
    // set the app to run untill stoped
    let playAgainCheck = true;
    while (playAgainCheck) {
      await wellcomeMessageStatic();
      let selectedMode = await askForMode();
      // display mode based on user choice
      await modesOfGame(selectedMode);
      // play games based on mode
      let resultPlayAgain = await game(selectedMode);
      // quit or play again based on result
      if (resultPlayAgain === '👍 Yes') {
        continue;
      } else {
        playAgainCheck = false;
        await quitApp();
      }
    }
  } else {
    await quitApp();
  }
})();
