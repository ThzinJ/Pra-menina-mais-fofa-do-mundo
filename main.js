let segundos = document.getElementById('segundos');
let minutos = document.getElementById('minutos');
let horas = document.getElementById('horas');
let dias = document.getElementById('dia');

var s = 34;
var m = 38;
var h = 18;
var d = 277;

setInterval(() => {
    s++;
    segundos.textContent = s + "s";
    minutos.textContent = m + "m";
    horas.textContent = h + "h";
    dias.textContent = d + "d";
    
    if (s == 60) {
        m++;
        s = 0;
    }
    
    if (m == 60) {
        h++;
        m = 0;
    }
    
    if (h == 24) {
        d++;
        h = 0;
    }
    
}, 1000)
