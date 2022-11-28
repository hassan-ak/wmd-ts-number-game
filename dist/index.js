#!/usr/bin/env node
// Number guessing game
import { quitApp } from './quitApp.js';
import { modesOfGame } from './modes.js';
import { startApp } from './startApp.js';
import { askToPlay } from './askToPlay.js';
import { instructions } from './instructions.js';
import { wellcomeMessage, wellcomeMessageStatic } from './welcomeMessage.js';
/**********************************************************************/
// Call all app functions in a particular sequence
(async () => {
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
        }
    }
    else {
        await quitApp();
    }
})();
