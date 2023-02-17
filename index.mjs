
import getLayout from "./html-structure.mjs";
import Game from './game_class.mjs';
import Player from './player_class.mjs';






//setting up Layout
getLayout();

//creating players 
const playerX = new Player("X");
const playerO = new Player("O");


//creating new game 
const game = new Game(playerX, playerO);
game.displayBoard();






