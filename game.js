function game(){

    // LET VARIABLES
    let mainMenu = document.getElementById('main-menu');
    let gameBox = document.getElementById('main-game-box');


    this.game = function(){
        console.log('constructor');
    }

    // Start Button
    this.startGame = function(e){
        mainMenu.style.opacity = '0';

        var delayInMilliseconds = 800;
        setTimeout(function () {
           mainMenu.style.display = 'none';
           gameBox.style.display = 'block';

           runGame();

        }, delayInMilliseconds);

    }
}

// RUNNING THE GAME

var gs = new gameScript();

function runGame(){
    //Shows if the games run
    console.log('Game Running');
}