function baseAltura(param1,param2=param1){
    return param1*param2
}
function areaTriangulo(v,h){
    return baseAltura(v,h)/2
}
function areaTrapezio(baseMaior,baseMenor,altura){
    return (parseFloat(baseMaior)+parseFloat(baseMenor))*(altura)/2
}
function areaCirculo(raio){
    return 3.14*(raio*raio)
}
let menu
let calculo
do{
    menu = parseFloat(prompt("1 - área do triângulo \n2 - área do retângulo \n3 - área do quadrado \n4 - área do trapézio \n5 - área do círculo\n6 - Sair"))
    switch(menu){
        case 1:
            calculo = areaTriangulo(prompt('Tamanho da base: '), prompt("Tamanho da altura: "))
            alert("Área do triangulo: "+calculo)
            break
        case 2:
            calculo = baseAltura(prompt('Tamanho da base: '), prompt("Tamanho da altura: "))
            alert("Área do retangulo: "+calculo)
            break
        case 3:
            calculo = baseAltura(prompt('Tamanho do lado: '))
            alert("Área do quadrado: "+calculo)
            break
        case 4:
            calculo = areaTrapezio(prompt('Tamanho da base maior: '), prompt("Tamanho da base menor: "), prompt("Altura do trapézio: "))
            alert("Área do Trapézio: "+calculo)
            break
        case 5:
            calculo = areaCirculo(prompt('Tamanho do raio: '))
            alert("Área do circulo: "+calculo)
            break
        case 6:
            alert("Saindo...")
            break    
    }
}while (menu !== 6)