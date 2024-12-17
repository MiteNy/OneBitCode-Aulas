let palavra = prompt("Insira a palavra para verificar se é um palindromo:")
let i=0
let a=0
let inverso =""
for(;i<palavra.length;i++){
    a=palavra.length-i
    inverso += palavra[a-1]
}

palavra===inverso ? alert("A palavra: "+palavra +" é um palindromo"):alert("A palavra: "+palavra +" não é um palindromo")