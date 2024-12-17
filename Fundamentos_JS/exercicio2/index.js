let nomeVeiculo1 = window.prompt('Insira o nome do veiculo 1:')
let velocidadeVeiculo1 = window.prompt('Insira a velociade do veiculo 1:')

let nomeVeiculo2 = window.prompt('Insira o nome do veiculo 2:')
let velocidadeVeiculo2 = window.prompt('Insira a velociade do veiculo 2:')
velocidadeVeiculo1 = parseFloat(velocidadeVeiculo1)
velocidadeVeiculo2 = parseFloat(velocidadeVeiculo2)

let resposta = ""

velocidadeVeiculo1 > velocidadeVeiculo2 ? resposta = (nomeVeiculo1 +' foi mais rápido que '+ nomeVeiculo2) : velocidadeVeiculo2 > velocidadeVeiculo1 ? resposta = (nomeVeiculo2 +' foi mais rápido que '+ nomeVeiculo1) : resposta = (nomeVeiculo1 +' teve a mesma velocidade que o '+ nomeVeiculo2) 

window.alert(resposta)