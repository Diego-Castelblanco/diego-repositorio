const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("¡Bienvenido al juego de adivinar el número!");
console.log("He elegido un número entre 1 y 100. ¡Adivínalo!");

function preguntarNumero() {
    readline.question('Ingresa tu número: ', (input) => {
        const numeroUsuario = parseInt(input);
        intentos++;

        if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
            console.log("Por favor, ingresa un número válido entre 1 y 100.");
            preguntarNumero();
        } else if (numeroUsuario === numeroSecreto) {
            console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
            readline.close();
        } else if (numeroUsuario < numeroSecreto) {
            console.log("Más alto.");
            preguntarNumero();
        } else {
            console.log("Más bajo.");
            preguntarNumero();
        }
    });
}

preguntarNumero();