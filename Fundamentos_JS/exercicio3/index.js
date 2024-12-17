let valor = parseFloat(prompt('insira o valor em metros a ser convertido: '))
let UnidadeMedida = prompt("Insira uma das unidades de medida abaixo (sigla):\n"+
    "milímetro (mm)\n"+
    "centímetro (cm)\n"+
    "decímetro (dm)\n"+
    "decâmetro (dam)\n"+
    "hectômetro (hm)\n"+
    "quilômetro (km)\n"
)
switch(UnidadeMedida){
    case "mm":
        alert(valor+"metro(s) convertido para milímetro = "+ (valor*1000))
        break
    case "cm":
        alert(valor+"metro(s) convertido para centímetro = "+ (valor*100))
        break
    case "dm":
        alert(valor+"metro(s) convertido para decímetro = "+ (valor*10))
        break
    case "dam":
        alert(valor+"metro(s) convertido para decâmetro = "+ (valor/10))
        break
    case "hm":
        alert(valor+"metro(s) convertido para hectômetro = "+ (valor/100))
        break
    case "km":
        alert(valor+"metro(s) convertido para quilômetro = "+ (valor/1000))
        break
    default:
        alert("Opção inválida!")
}