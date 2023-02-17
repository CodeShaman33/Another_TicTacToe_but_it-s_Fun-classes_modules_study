
class Game
{
    constructor(PlayerX, PlayerO)
    {
        this.PlayerX = PlayerX;
    }

    sayNameX = () => console.log(this.PlayerX.name);

}

export default Game;