import { cells } from "./data.mjs";


class Game {
    constructor(PlayerX, PlayerO) {
        //players objcts from other class
        this.PlayerX = PlayerX;
        this.PlayerO = PlayerO;
        this.cells = cells;



        this.running = false;

        this.currentPlayer = this.PlayerX;

        //run functions 
        this.listener1();



    }

    displayBoard() {
        let div = document.getElementById("testDiv");
        div.innerHTML = `ITS ${this.currentPlayer.name}'S TURN`;


    }

    listener1() {
        cells.forEach(cell => {
            cell.addEventListener("click", () => 
            {
                cell.classList.add(this.currentPlayer.name);
                this.changePlayer();
                this.displayBoard();

            });

        })
    }

    changePlayer()
    {
        this.currentPlayer = this.currentPlayer === this.PlayerX? this.PlayerO : this.PlayerX;
    }




}

export default Game;