// function somaNumeros(arr){
//     let valor = arr.reduce((valorAtual,index)=> valorAtual+index)
//     return valor
// }
// console.log(somaNumeros([1, 2, 3, 4, 5]))
// console.log(somaNumeros([10, -2, 7]))

// -------------------------------------------------------------

// function concatenarStrings(string){
//     return valor=string.reduce((acumulador,index)=> acumulador.concat(index+" "),"")
// }

// console.log(concatenarStrings(['Eu', 'adoro', 'programar'])); // Saída: "Eu adoro programar"
// console.log(concatenarStrings(['JavaScript', 'é', 'incrível'])); // Saída: "JavaScript é incrível"

// --------------------------------------------------------------

function produtoNumeros(valor){
    return valor.reduce((acumulador,index)=> (acumulador*index),1)
}

console.log(produtoNumeros([2, 3, 4])); // Saída: 24
console.log(produtoNumeros([]));        // Saída: 1

52241136853125000292550010000005821000005836