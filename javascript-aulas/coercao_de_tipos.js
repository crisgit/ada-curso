console.clear()

// 1- Coerção explícita (Manual)

const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);


console.log(Number('123456'));
console.log(parseFloat('232434.43'));
console.log(parseInt('2342.43'));
console.log(Boolean(0)); // zero sempre é considerado false

console.clear()

// 2- Coerção implícita (Automática)

console.log('10' + 1); // junta o texto e fica 101
console.log('10' - 1); // faz o calculo de uma string
console.log(10 * '3'); // nas outras operações como multiplicação tbm faz o calculo da string
console.log(10 - 'asasa'); // o resultado aparece NaN pois nao reconhece como numero

// Qual será a saída desse código?
let n = 1 + '1';

n = n - 1;

console.log('n:', n);

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5");

// Qual será a saída desse código?
console.log("5" + 2 + 3 + 4);

// Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5");
