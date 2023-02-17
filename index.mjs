import {arr  as ee} from './data.mjs'
import Player from './player_class.mjs';
import Game from './game_class.mjs';
import getLayout from './html-structure.mjs';


console.log(ee);

let playerX = new Player('X');
console.log(playerX.sayName())

let newGame = new Game(playerX);
newGame.sayNameX();

