// Igualdade: == (ou ===)
// Desigualdade: != (ou !==)
// Maior que: >
// Maior ou igual: >=
// Menor que: <
// Menor ou igual: <=

// Conjunções lógicas

const numero = 10;

console.log(numero == 10);
console.log(numero > 20);

console.log(10 == '10'); // == compara somente o conteudo
console.log(10 === '10'); // === compara o conteudo e o tipo da variavel

console.clear();

console.log(10 != 10);
console.log(10 != '10'); // != compara somente o conteudo
console.log(10 !== '10'); // !== compara o conteudo e o tipo da variavel

// Conjunções lógicas

// AND => &&

let idade = 26;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log('Posso dirigir?', possoDirigir);

// OR => ||

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70;

console.log('Voto Facultativo?:', votoFacultativo);

// NOT => !

const estouNoCurso = false;

console.log(!estouNoCurso);

