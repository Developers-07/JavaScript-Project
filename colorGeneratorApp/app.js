const bttn = document.querySelector('button');
const body = document.querySelector('body');
const clr = ['pink', 'blue', 'green', 'yellow', 'red', 'purple', 'gray'];

body.style.backgroundColor = 'violet';

bttn.addEventListener('click', colorChange);

function colorChange() {
    let i = parseInt(Math.random()*clr.length);
    body.style.backgroundColor = clr[i];
}
