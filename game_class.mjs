
class Game
{
    constructor(PlayerX, PlayerO)
    {
        this.PlayerX = PlayerX;
        this.running = false;
        this.addBtnListener();

        this.currentPlayer = this.PlayerX;
        
    }

    sayNameX() {
        console.log(this.PlayerX.name);
      }
    
      addBtnListener() {
        document.getElementById("startBtn").addEventListener("click", this.startGame);
      }    
    startGame()
    {
        document.getElementById('container').style.display = 'none';
        this.running = true;
    }

    clicked()
    {
        this.currentPlayer = this.currentPlayer === this.PlayerX? this.PlayerO : this.PlayerX;
        
    }
}

export default Game;