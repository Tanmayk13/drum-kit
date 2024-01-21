let arr = document.querySelectorAll(".drum");

for (var i = 0; i < arr.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var btn = this.innerHTML;
    makeSound(btn);
    buttonAnimation(btn)
  });
}

document.addEventListener('keydown',function (e){
    makeSound(e.key)
    buttonAnimation(e.key)
})

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let kick = new Audio("./sounds/crash.mp3");
      kick.play();
      break;

    case "l":
      let crash = new Audio("./sounds/kick-bass.mp3");
      crash.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(pressedKey){
let activeButton = document.querySelector("." + [pressedKey])

activeButton.classList.add("pressed")
setTimeout(() =>{
    activeButton.classList.remove("pressed")
},250)

}
