
let buttonAll = document.querySelectorAll('.drum');

for(let button of buttonAll) {
  button.addEventListener('click', function audio() {

  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  animationButton(buttonInnerHTML);
});
};



document.addEventListener('keydown', function () {

 makeSound(event.key);
 animationButton(event.key);
})

function makeSound(key) {
  switch (key) {

    case 'a': var audio1 = new Audio('sounds/mixkit-bell-sound-with-delay-585.wav');
    audio1.play();
      break;

    case 's': var audio2 = new Audio('sounds/mixkit-choir-harp-bless-657.wav');
    audio2.play(); break;

    case 'd': var audio3 = new Audio('sounds/mixkit-horns-of-vengeance-713.wav');
    audio3.play(); break;

    case 'f': var audio4 = new Audio('sounds/mixkit-losing-piano-2024.wav');
    audio4.play(); break;

    case 'j': var audio5 = new Audio('sounds/mixkit-relaxing-bell-chime-3109.wav');
    audio5.play(); break;

    case 'k': var audio6 = new Audio('sounds/mixkit-synth-mechanical-notification-or-alert-650.wav');
    audio6.play(); break;

    case 'l': var audio7 = new Audio('sounds/mixkit-wrong-answer-bass-buzzer-948.wav');
    audio7.play(); break;

    default: console.log();
  }
}

function animationButton(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('anim');
  setTimeout(function () {activeButton.classList.remove('anim');}, 300);
}
