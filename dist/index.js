#!/usr/bin/env node
// Number guessing game
import { modesOfGame } from './modes.js';
import { askToPlay } from './askToPlay.js';
import { instructions } from './instructions.js';
import { wellcomeMessage } from './welcomeMessage.js';
/**********************************************************************/
// Call all app functions in a particular sequence
(async () => {
    await wellcomeMessage();
    await instructions();
    // display all modes
    await modesOfGame('all');
    let askToPlayChoice = await askToPlay();
})();
