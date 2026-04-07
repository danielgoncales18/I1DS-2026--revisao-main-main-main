function podevotar(idade) {
    let frase;
        if(idade < 16) {   
            frase = "não pode votar";
        }else if (idade >= 18 && idade <= 65) {
            frase = "pode votar,e é obrigatorio";
            } else { 
               frase = "pode votar, mas é opcional";
               }
               return frase;
            }
            let idade = 23;
            console.log("idade:", idade, "-", podevotar(idade));   




            /*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/

// parte 01 - inicio da resolução do exercicio
// function verificarsituacao(nota) {
//     if (nota < 5){
//     return "reprovado";
//     }  else if (nota < 7) {
//     return "recuperação";
//     } else{
//     return "aprovado";
//     }
//   }
  
//   console.log(verificarsituacao(5));
//   console.log(verificarsituacao(7));

// parte 02 - solução + parte extra 
function situacaofinal(n1,n2,n3,n4){
    let media = (n1 + n2 + n3 + n4) / 4;

    if (media < 5){
        return "reprovado";
        } else if (media < 7 ) {
        return "recuperação";
        } else {
            return "aprovado";
        }
}

console.log(situacaofinal(7,10,10,10));




function final(n1,n2,n3,n4){
    let media = (n1 + n2 + n3 +n4) / 4;
    let situacao;

    if (media < 5) situacao = "reprovado";
    else if (media < 7 ) situacao = "recuperação";
    else situação = "aprovado";

    return "media:" + media + " - situação: " + situacao;

    console.log(final)7, 8, 6, 5));5