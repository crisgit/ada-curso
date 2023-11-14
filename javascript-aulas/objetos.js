// Objetos

// Como criar um objeto no Javascript?

let pessoa = {
    nome: 'Cristina',
    'ano-curso': 2023
}

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa["ano-curso"]);

// Como adicionar um par chave-valor?

pessoa.sexo = 'feminino';

console.log(pessoa);

// Como remover um par chave-valor?

delete pessoa.sexo;

console.log(pessoa);

console.clear();

// Como percorrer?

for (let chave in pessoa) {
    console.log(chave);
}