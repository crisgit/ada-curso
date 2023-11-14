console.clear();

// Arrays

// Como criar array?

let arr = ['Cristina', 2, 1.9, true];

console.log(arr);

// Como acessar os elementos do array?

console.log('Primeiro elemento:', arr[0]);

console.log('Segundo elemento:', arr[1]);

console.log('Terceiro elemento:', arr[2]);

console.log('Quarto elemento:', arr[3]);

// Como obter o tamanho do array?

console.log('Tamanho do array:', arr.length);

// Percorrendo arrays

console.clear();

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.clear();

// outra forma

// percorre os elementos do array

for (let tipoElemento of arr) { 
    console.log(tipoElemento);
}

console.clear();

// percorre os índices do array

for (let indice in arr) { 
    console.log(indice, arr[indice]);
}