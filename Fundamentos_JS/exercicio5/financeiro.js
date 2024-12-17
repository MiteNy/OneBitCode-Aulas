let saldo = parseInt(prompt("Saldo inicial: R$"))
let opcao
do{
    opcao = prompt("Saldo:"+saldo+"\n1-Depositar \n2-Sacar \n3-Sair")
    switch(opcao){
        case "1":
            saldo+=parseInt(prompt("Valor à Depositar:"))
            break
        case "2":
            saldo-=parseInt(prompt("Valor à Sacar:"))
            break
    }
}while(opcao!=3 && opcao)
    length