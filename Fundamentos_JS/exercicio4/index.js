const nome = prompt('Seu nome: ')
let jaVisitou = prompt("Já visitou outra cidade?\n Sim/Não")
let cidade = ""
let cidades = ""
let qtdCidades = 0

while(jaVisitou=="Sim"){
    cidade = prompt("Qual cidade?")
    cidades+=cidade+ " \n"

    jaVisitou = prompt("Já visitou outra cidade?\n Sim/Não")
    qtdCidades +=1
    if(jaVisitou == "Não"){
        alert(nome+" Você já visitou "+ qtdCidades + " cidades\n"+
            cidades
        )
        break
    }
        
    
}