// switch case -> estrutura de decisão usada quando queremos comparar o valor de 
// uma variavel com varios possiveis resultados.
//regra d Profcastello - se tiver mais que 3 comparadores, faca um switch case

// exemplo 01 - menu
// neste exemplo a variavel meuselecionado guardara o nome de uma opção de menu.
//o switch verifica qual foi a opção escolhido e exibe uma mensagem correspondente

let menuselecionado = "home";
switch (menuselecionado) {
    case "home":
        console.log("voce clicou no link 'home'");
        break;
case "quem somos":
    console.log("voçe clicou no link 'quem somos'");
    break;
case "pague um café":
   console.log("voce clicou no link 'pague um café'");
       break;
     
       default:
        console.log("opção incorreta, selecione uma opção no menu!");
        break;
        }

// redes sociais 
// pague  um cafe


let pi = 3.1415683

console.log(pi);
console.log(pi.toFixed(2)); //coloca numeros com2 casas decimais somente



