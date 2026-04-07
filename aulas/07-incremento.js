// Operadores de incremento e decremento | pre e pos incremento
// incremento
//incremento => somar algo i

let idade = 16;
console.log(idade);
idade = idade + 1; // somei 1 na idade
// idade = idade + 1 // soma 1 na idade
idade++;
console.log(idade);
idade++;
console.log(idade);
// idade = idade - 1 // subtrai 1 na idade
idade--;
console.log(idade);
idade--;
console.log(idade);
console.log("-------------------------")

let novaidade = idade + 1; // idade++ soma na mesma variavel
console.log("idade:", idade,"| nova idade:", novaidade);

novaidade = ++idade;
console.log("idade:", idade, "| nova idade:", novaidade);