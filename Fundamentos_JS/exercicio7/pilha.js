let pilhaCartas = ["Coringa","Rei de copas","Às de espadass"]
let menu = ""
do{
menu = parseFloat(prompt('Cartas no baralho: '+ pilhaCartas.length+"\n 1 - Adicionar \n 2 - Puxar carta \n 3 - Sair" ))
switch(menu){
    case 1:
        pilhaCartas.push(prompt("Qual carta você você quer adicionar ao baralho?"))
        break
    case 2:
        if (pilhaCartas==0){
            alert("Baralho sem carta!") 
        }else alert(pilhaCartas.pop()+" Foi retirado do baralho")
        break
    case 3:
        alert("Saindo...")
        break
    default:
        prompt("Opção inválida!")
}
}while (menu!=3 || menu==false)


