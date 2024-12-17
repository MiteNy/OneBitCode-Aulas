let nome1 = window.prompt("Nome do personagem 1:")
let dano1 = window.prompt("Dano do personagem 1:")
dano1 = parseFloat(dano1)

let nome2 = window.prompt("Nome do personagem 2:")
let defesa2 = window.prompt("defesa do personagem 2:")
let vida2 = window.prompt("vida do personagem 2:")
let possuiEscudo = window.confirm('Ele possui escudo?')
// defesa2 = parseFloat(defesa2)
// vida2= parseFloat(vida2)

let resultado = ""
let danoCausado = 0

dano1 >  defesa2 && !possuiEscudo ? danoCausado = dano1 - defesa2 : dano1 > defesa2 && possuiEscudo ? danoCausado = (dano1-defesa2)/2: danoCausado=0

window.alert(
    "Nome do pesonagem 1: "+nome1 +"\n" 
    +" Dano: "+dano1 +"\n" 
    +"-----------------------------" +"\n"
    +"Nome do pesonagem 2 :"+nome2 +"\n" 
    +"Defesa: "+defesa2+"\n" 
    +"Vida: "+ vida2+"\n" 
    +"Escudo: " + (possuiEscudo ? "Sim" : "Não")+"\n" 
    +"-----------------------------"+"\n"
    +"Dano Sofrido: "+ danoCausado +"\n" 
    +"Vida Restante: "+ (vida2-danoCausado)
    )