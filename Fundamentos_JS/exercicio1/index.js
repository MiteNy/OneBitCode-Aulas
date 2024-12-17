let nome = window.prompt("Primeiro nome:")
let sobrenome = window.prompt("Sobrenome:")
let estudo = window.prompt("Seu campo de estudo:")
let nascimento = window.prompt('Ano de nascimento:')

console.log("O Recruta "+nome+" "+sobrenome+" tem "+ (2024 - parseFloat(nascimento)) +" Anos")