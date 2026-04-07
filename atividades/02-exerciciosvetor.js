var frutas = ["banana","maçã", "pera", "uva","morango"]
console.table(frutas);

console.log(frutas);

frutas.push("tangerina");
console.table(frutas);

frutas.unshift("goiaba");
console.table(frutas);

console.log(frutas[5]);

let indUva = frutas.indexOf("uva");
frutas.splice(indUva, 1);
console.log("array 4 ");
console.table(frutas);

let frutas2 = frutas.slice(2,5);
console.log("array 1 copia");
console.table(frutas2)