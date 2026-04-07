// criando variaveis do tipo array (vetor)

var dinos = ["tiranosauro rex ","estegossauro","brontossauro", "triceratopos"];

// imprimindo os dados em forma de linha
console.log(dinos);
// imprimindo os dados em forma de tabelas
console.table(dinos);

// length -> "tamanho" do array (quantidade de elementos)
console.log(" o vetor tem",dinos.length, "elementos");

// imprimir elementos a partir do indice
 console.log(dinos[2]);

 // push -> adiciona um novo elemento no final da fila 
 dinos.push("anquilossauro");
 console.log("o vetor agora tem", dinos.length, "elementos");
console.table(dinos);
console.log("o vetor agora tem", dinos.length,"elementos");

// unshift -> adiciona um novo elemento no inicio da fila 
dinos.unshift("velociraptor");
console.table(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

// obter um elemento a partir do indice
console.log("1ª posiição:", dinos[0]);
console.log("4ª posiição:", dinos[3]);
console.log("20ª posiição:",dinos[20]);

//pop -> remover um elemento do final do vetor (ultimo elemento)
dinos.pop();
console.table(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

// shift -> remover um elemento do inicio do vetor (primeiro elemento)
dinos.shift();
console.table(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

// splice -> remove um elemento a partir de um indice, e tambem precisa ser informado a quantidade de registros a ser excluido a partir do indice.
dinos.slice(1,1); // remove somente o segundo item da lista
console.table(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

// adicionar mais elementos ao vetor 
dinos.push("pterodactilo");
dinos.push("estegossauro");
dinos.push("argentinossauro");

// procurar um elemento a partir do nome (descrição)
// indexOf(procurado) -> retorna o indice do elemento no vetor 
let procurado = "estegosauro";
let indice = dinos.indexOf(procurado);
console.log("o", procurado, "esta no indice:", indice);

// indexOf(procurado) -> retorna -1 caso não encontre o elemento 
procurado = "cristianossauro";
indice = dinos.indexOf(procurado);
console.log("o ", procurado, "esta no indice:", indice);

// excluir um elemento com base em seu nome
// 1º localizar o indice do elemento a partir do nome 
// 2º excluir o registro com base no indice retornado

procurado = "estegossauro";
indice = dinos.indexOf(procurado);
console.log("o", procurado, "esta no indice:", indice);
dinos.slice(indice, 1);
console.table(dinos);

// alterar o valor de um elemento a partir do indice
dinos[1] = "anquilossauro";
console.table(dinos);

// slice - > criar uma copia do vetor 
let novalista = dinos = dinos.slice(); // copia completa do vetor dinos

let listaparcial = dinos.slice(1,3); // cria uma copia do vetor dinos a partir do indice onde comeca e onde termina a copia 
console.table(dinos);