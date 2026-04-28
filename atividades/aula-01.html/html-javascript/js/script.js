function olamundo(){
    alert("olamundo");


const olamundo = () => {
    alert("olamundo");
}

  

    const mudartexto = () => {
       
        let elementoalvo = document.getElementById("texto");
        document.getElementById("texto").innerHTML = "🔥 novo texto com js";
        document.getElementById("texto").style.color = "red";
    document.getElementById("texto").style.backgroundColor = "yellow";
    }

    
}

const enviarnome = () => {
     let nomedigitado = document.getElementById("nome").value;
      
     alert("ola" + nomedigitado);

       let nomedigitado = document.get

    };



const somar =() => {

    let numero1 = parseInt(document.getElementById("n1").value);
    let numero2 = parseInt(document.getElementById("n2").value);

    let result = numero1 + numero2;

    document.getElementById("resultado").innerHTML = result;
}

