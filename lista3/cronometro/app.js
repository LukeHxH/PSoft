// alert("estou funcionando");

let $start = document.querySelector(".start");
let $pause = document.querySelector(".pause");
let $reset = document.querySelector(".reset");

let counter = 0;
let interval;

$start.onclick = start;
$pause.onclick = pause;
$reset.onclick = reset;

function update() {
	counter = counter + 1;
	
	let secs = counter % 60;
	let mins = Math.floor((counter / 60) % 60);
	let hours = Math.floor((counter / (60 * 60)) % 60);
	
	let horas = String(hours).padStart(2, "0");
    let minutos = String(mins).padStart(2, "0");
    let segundos = String(secs).padStart(2, "0");
    
    atualizaInfoTela(horas, minutos, segundos)
}

function pause() {
	clearInterval(interval);
}

function reset() {
	counter = 0;
	let value = String(counter).padStart(2, "0");
    atualizaInfoTela(value, value, value);
	pause();
}

function start() {
	interval = setInterval(function() {
		update();
	}, 1000);
}

function atualizaInfoTela(horas, minutos, segundos) {
	let $cronometro = document.querySelector("#cronometro");
	
	$cronometro.innerText = `${horas}:${minutos}:${segundos}`;
}
