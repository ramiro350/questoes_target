const prompt = require('prompt-sync')({sigint: true})

function ExisteA(palavra){
    if(palavra.includes('A') || palavra.includes('a')){
        return `Palavra contém a letra A.`
    }
    return `Palavra não contém a letra A.`
}

const palavra = prompt("Informe uma palavra: ")
const resultado = ExisteA(palavra)
console.log(resultado)