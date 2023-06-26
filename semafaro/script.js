const parar = document.querySelector('#parar');
const atencao = document.querySelector('#atencao');
const comecar = document.querySelector('#comecar');
const ciclo = document.querySelector('#ciclo');
const buttons = document.getElementById('buttons')

const vivoVermelho = document.querySelector('.vivo');
const vivoAmarelo = document.querySelector('.vivoA');
const vivoVerde = document.querySelector('.vivoV');
vivoVermelho.classList.remove('vivo');
vivoAmarelo.classList.remove('vivoA');
vivoVerde.classList.remove('vivoV');

let intervaId = null;
let colorIndex = 0;

const semafaro = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
};

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex :0;

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval(intervaId)
}

const turnOn = {
     'red': () => vivoVermelho.classList.toggle('vivo'),
     'yellow': () => vivoAmarelo.classList.toggle('vivoA'),
     'green': () => vivoVerde.classList.toggle('vivoV'),
     'automatic': () => intervaId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', semafaro)