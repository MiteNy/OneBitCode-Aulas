let menu
let ordem =""
let filaPacientes = ["João","Marcos","Tiago"]
let i=0
do{
    
    // if(i==filaPacientes.length-1){
    //     ordem=""
    // }
    // i=0
    for(i=0;i<filaPacientes.length;i++){
        ordem +=(i+1+"º Posição "+filaPacientes[i]+"\n")
    }
    menu = parseFloat(prompt("Ordem da fila: \n"+ordem+"\n----MENU---\n 1 - Novo Paciente \n 2 - Atender Paciente \n 3 - Sair"))
    ordem =""
    switch(menu){
        case 1:
            filaPacientes.push(prompt("Insira o nome do paciente que deseja adicionar a fila:"))
            break
        case 2:
            if(filaPacientes.length ==0){
                alert("Não tem mais nenhum paciente!")
                break}else {alert(filaPacientes.shift() +" Será o próximo paciente")
                    break
                }
        case 3:
            alert("Saindo...")
            break
        default:
            alert("nenhum dos numeros")
    }
}while (menu!= 3 || menu ==false);
console.log(ordem)