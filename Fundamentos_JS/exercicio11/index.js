function escalar(){
    const div = document.getElementById('escalacao')
    let position = document.querySelectorAll('#form1 input')
    let ul = document.createElement('ul')
    // let teste =confirm("Deseja escalar o jogador abaixo?\n"+
    //     "Posição: "+position[0].value+"\n"+
    //     "Nome: "+position[1].value+"\n"+
    //     "Numero da camisa: "+position[2].value+"\n"
    // )
    teste=true
    // for (let index = 0; index < position.length; index++) {
    //     teste+=("\n"+position[index].value)
        
    // }
    div.appendChild(ul).id=position[2].value
    console.log(position[2].value)
    switch (teste){
        case true:
            position.forEach((element,index) => {
                let li = document.createElement('li')
                ul.appendChild(li)
                li.innerText=element.value
                console.log(element.value)
                element.value=''

            });
            break
        case false:
            alert('Corrija ou insira um novo jogador')
    }
    



    console.log(position[2].value)
    document.createElement('br')
    
    // ul.appendChild(li)
    // li.innerText=position[0].value
    // ul.appendChild(li)
    // ul.appendChild(li)
    // position = document.querySelectorAll('input').value=''
}

function removertime(){
    let escolha = document.querySelector('#numero').value
    if (confirm('Deseja remover o jogador camisa nº :'+escolha)){
        let remover = document.getElementById(escolha)
        remover.remove()
        console.log(escolha)
    }
    ent.querySelector('#numero').value=''
}