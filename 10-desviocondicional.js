// Desvio condicional - if-else

/*condições simples com if 
sintaxe: if( condição ){
    codigo a ser execultado, se verdadeiro
}
*/

let anonacimento = 1999

if(anonacimento > 2003) {
    console.log("a pessoa nasceu depois de 2003.");
}

if(anonacimento < 2003) {
    console.log("a pessoa nasceu antes depois de 2003.");
}
if(anonacimento == 2003) {
    console.log("a pessoa nasceu em 2003.");
}

// condicional if-else

if(anonacimento > 2000){
    console.log("a pessoa naceu depois de 2000");
}else{
    console.log("a pessoa naceu antes de 2000");
}

// condicional composta com if

const login = "admin";
const senha = "12345";

let loginuser = "admin";
let senhauser = "12345";

if (loginuser == login && senhauser == senha ){
    console.log("login realizado com sucesso!")
}

// condicional composta com if
if (loginuser == login && senhauser == senha ){
    console.log("login realizado com sucesso!")
}else{
    console.log("acesso negado");
}

//desvio aninhado - IF-ELSE-IF-ELSE ...

let semaforo = "vermelho";

if (semaforo == "vermelho"){
    console.log("pare");
} else if(semaforo == "amareo"){
    console.log("atenção");
} else if (semaforo == "verde") {
    console.log("continue");
} else {
    console.log("opçao incorreta");
}

// criando variaveis locais ( só existem dentro do bloco onde foram criadas )

let mes = "agosto";
let dia = "15";

if( dia == 15 && mes == "agosto") {
let mensagem = "hoje é dia 15 de agosto";
console.log("mensagem");
}
console.log("tentando acessar a variavel 'mensagem' fora do escopo do if,vai dar erro!!!");
// console.log(mensagem);

/***********************************************************/
// IF ternário(IF inline)

let preco = 500;
let resultado = (preco <= 100) ?"tá barato" : " vish, ta caro!";
console.log("preço:",preco,"-",resultado );
// o codigo acima, faz exatamente a mesma coisa que o codigo abaixo

if(preco <= 100){
    resultado = "tá barato";
}else {
resultado = "vish, ta caro";
}
console.log("preço:",preco, "-",resultado)  

/***************************************************************/