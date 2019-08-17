/*
    MAIN GAME DIALOG
    THIS IS WHERE YOU ADD THE DIALOGS AND NAMES
    LOOK FOR THE DOCUMENTATION FOR MORE DETAILS
*/

var intervalID;

var textArray = [];

var switchSlides = true;

var slideIndex = 0;

var typingSpeedOfText = 20;

let button = document.getElementById('dialog-box');
let textBox = document.getElementById('dialog');
let currIndex = 0;

var gameObj = new gameScript();

// INITIAL BACKGROUND

setBackground("outside.jpg");

button.addEventListener('click', function () {
    gameObj.run();
});

function gameScript() {

    /* 
        This is where you add your dialog!
    */

    var names = [
        "John"
    ];
    
    // use ~${names[0]}:

    var dialog = {
        text: [
            
            `~${names[0]}: I'm going to eat some pizza today`,
            `John ate some pizza`

        ]
    };

    for(var i = 0; i < dialog.text.length; i++){
        textArray.push(dialog.text[i])
    }

    // DONT TOUCH THE CODE BELOW

    // THIS IS NOT USER DEFINED FUNCTIONS 

    // TECHNICALLY IT IS BUT IT YOU ARE THE USER :D

    this.run = function () {
        if(dialog.text[slideIndex].includes("#")){
            var img = dialog.text[slideIndex].slice(1,dialog.text[slideIndex].length);
            setBackground(img);
            slideIndex+=1;
            switchSlides = true;
        }
        
        if (dialog.text[slideIndex].includes("~") && dialog.text[slideIndex].includes(":")){
            var lastVal = dialog.text[slideIndex].search(":");
            var character = dialog.text[slideIndex].slice(1,lastVal);
            var actualText = dialog.text[slideIndex].substr(lastVal + 2);
            dialog.text[slideIndex] = actualText;
            if(character.length > 0){
                setName(character);
            }
            else{
                setName("");
            }
            //console.log(actualText);
        }
        
        // INDENTED JUST TO SHOW THE CHANGING FUNCTION
            if (switchSlides === true) {
                typed(dialog.text[slideIndex], true, typingSpeedOfText);
                switchSlides = false;
            }
            else if (switchSlides === false) {
                typed(dialog.text[slideIndex], false, typingSpeedOfText);
                switchSlides = true;
                slideIndex++;
            }
        
    }

}

function typed(text, bool, typingSpeed) {
    textBox.innerHTML = "";

    if (text == undefined) {
        //console.log('Function Used');
        clearInterval(intervalID);
        slideIndex++;
        gameObj.run();
    }
    else {
        try {
            if (bool === true) {
                var index = 0;
                function typing() {

                    if (index > text.length) {
                        //console.log(text.length);
                        clearInterval(intervalID);
                        switchSlides = true;
                        slideIndex++;
                    }
                    else {
                        textBox.innerHTML += ((text.charAt(index) == " ") ? "&nbsp;" : text.charAt(index));
                        index++;
                    }
                }
                intervalID = setInterval(typing, typingSpeed);
            }
            else if (bool === false) {
                clearInterval(intervalID);
                //console.log('cleared');
                textBox.innerHTML = "";
                textBox.innerHTML = text;
            }
        }
        catch (err) {
            console.log("An Error Occured");
            clearInterval(intervalID);
        }
    }
}


// setBacground

function setBackground(fileName){
    var backgroundHolder = document.getElementById('main-game-box');
    backgroundHolder.style.backgroundImage = "url(assets/images/" + fileName + ")";
}

function setName(charName){
    var nameHolder = document.getElementById('character-name');
    var nameBox = document.getElementById('name-box');
    if(charName.length > 0){
        nameBox.style.display = "table";
        nameHolder.innerText = charName;
    }
    else{
        nameBox.style.display = "none";
    }
    
}
