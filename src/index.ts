#!/usr/bin/env node

// Number guessing game
import { modesOfGame } from './modes.js';
import { instructions } from './instructions.js';
import { wellcomeMessage } from './welcomeMessage.js';

/**********************************************************************/
// Call all app functions in a particular sequence
(async (): Promise<void> => {
  await wellcomeMessage();
  await instructions();
  // display all modes
  await modesOfGame('all');
})();
