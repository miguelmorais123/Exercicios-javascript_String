//funcao recupera valor
/*

let listaPalavras = frase.split("");
const resposta = inverterString (frase);
exibeMensagem (resposta,"#resultado" ); 

*/


const enviar = document.getElementById("executa");


enviar.onclick = function(){
    
//recuperar a frase digitada (nao precisa de funcao recupera valores) 
const txtFrase = document.getElementById("texto").value;
let fraseInvertida = "";
let resposta = funcaoInverter(fraseInvertida, txtFrase);

function funcaoInverter (){

    for(let i = txtFrase.length -1; i >= 0; i--){
    fraseInvertida+=txtFrase[i];
}

}
exibeMensagem(fraseInvertida,"#resultado");
//inverter as palavras


function exibeMensagem(msg, seletor){
    document.querySelector(seletor).innerHTML = msg
}
}


