let audio;


for(var i=0; i<7; i++){


document.querySelectorAll('.drum')[i].addEventListener('click', function (){

    var buttonInnerhtml = this.innerHTML;
    buttonAnimation(buttonInnerhtml)
    makeSound(buttonInnerhtml)
    

})



document.addEventListener('keydown', function(e){
    console.log(e)
    buttonAnimation(e.key)
    makeSound(e.key);
});

function makeSound(key){
    switch (key) {
        case 'w':
            var audioCrash = new Audio('/Users/colbyfornerette/Desktop/Drum Kit Starting Files/FirstJSProject/sounds/crash.mp3')
            audioCrash.play()
            break;
        case 'a':
            var audioKick = new Audio('/Users/colbyfornerette/Desktop/Drum Kit Starting Files/FirstJSProject/sounds/kick-bass.mp3')
            audioKick.play()
            break;
        case 's':
            var audioSnare = new Audio('/Users/colbyfornerette/Desktop/Drum Kit Starting Files/FirstJSProject/sounds/snare.mp3')
            audioSnare.play()
            break;
        case 'd':
            var audioTom1 = new Audio('/Users/colbyfornerette/Desktop/Drum Kit Starting Files/FirstJSProject/sounds/tom-1.mp3')
            audioTom1.play()
            break;
        case 'j':
            var audioTom2 = new Audio('/Users/colbyfornerette/Desktop/Drum Kit Starting Files/FirstJSProject/sounds/tom-2.mp3')
            audioTom2.play()
            break;
        case 'k':
            var audioTom3 = new Audio('/Users/colbyfornerette/Desktop/Drum Kit Starting Files/FirstJSProject/sounds/tom-3.mp3')
            audioTom3.play()
            break;
        case 'l':
            var audioTom4 = new Audio('/Users/colbyfornerette/Desktop/Drum Kit Starting Files/FirstJSProject/sounds/tom-4.mp3')
            audioTom4.play()
            break;
        default:
            console.log(buttonInnerhtml)
            break;
    }
}



function buttonAnimation(currentKey){
    var activeButton = document.querySelectorAll('.'+currentKey)[0];
    activeButton.classList.add('pressed');
    setTimeout(function (){activeButton.classList.remove('pressed');}, 150)

}

}
