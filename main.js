// Get all keys
const keys = document.querySelectorAll(".key")

console.log(keys)

// play notes
function playNote(event) {

    let audioKeyCode = getKeyCode(event)
    

    // typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    // if key exists
    const cantFoundAnyKey = !key

    if(cantFoundAnyKey) {
        return
    }
    
    addPlayngClass(key)
    playAudio(audioKeyCode)
}

function addPlayngClass(key) {
    key.classList.add("playing")
}


function getKeyCode(event) {
    let keyCode; 

    const isKeyboard = event.type === "keydown" //True or False
    if(isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode 

}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}


function registerEvents(){

// click with mouse
keys.forEach(function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
}) 

//keyboard type
window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)