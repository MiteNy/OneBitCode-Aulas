let menu = ''
let imoveis = [{nome: "Cristian", quartos: 3, banheiro:2,garagem:"sim"}]
imoveis[1]={nome:"Mauro",quartos: 1, banheiro:1,garagem:"não"}
// for(let i =0;i< imoveis.length; i++){
//                 console.log(imoveis[i])
// }
// console.log(imoveis[imoveis.length-1])

let dado1,dado2,dado3,dado4
do{
    menu = parseFloat(prompt(imoveis.length+ " Imoveis cadastrados\n 1 - Salvar imovel \n 2 - Mostrar imoveis \n 3 - Sair"))
    console.log(menu)
    switch (menu){
        case 1:
            dado1=prompt("Nome do proprietário:")
            dado2=prompt("Quantidade de quartos:")
            dado3=prompt("Quantidade de banheiros:")
            dado4=prompt("Tem garagem?")
            imoveis[imoveis.length]={nome:dado1,quartos:dado2,banheiro:dado3,garagem:dado4}
            console.log(imoveis)
            break
        case 2:
            for(let i =0;i< imoveis.length; i++){
                
                alert("Imovel "+(i+1)+
                    "\nProprietario: "+imoveis[i].nome+
                    "\nQuartos: "+imoveis[i].quartos+
                    "\nbanheiro: "+imoveis[i].banheiro+
                    "\ngaragem: "+imoveis[i].garagem
                )
            }
    }




}while (menu!==3)