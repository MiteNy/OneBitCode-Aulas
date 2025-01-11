//adicionar tecnologia - Deve criar uma nova linha de contendo nome da tecnologia, grupo de radio contendo tempo de experiência(0-2,3-4,+5) e botão remover
let add = document.querySelectorAll('.cadastro-inicial')
add[0].addEventListener('submit',createUl)
let counter=0



function createUl(ev){
    counter+=1
    ev.preventDefault()
    let selectUl = document.querySelectorAll('ul')
    let createLi = document.createElement('li')
    let createButton = document.createElement('button')
    createButton.setAttribute('type','button')
    let createInput = document.createElement('input')
    createLi.setAttribute('name','tecnologia')
    createLi.setAttribute('class','tec-'+counter)
    selectUl[0].appendChild(createLi).appendChild(createInput).after(createButton)
    // selectUl[0].appendChild(document.createElement('input'))
    let a=0
    while (a <=2) {
        console.log('passou')
        a++
        let createRadio=document.createElement('input').setAttribute('type', 'radio')
        console.log(document.querySelectorAll('.tec-'+counter)[0].appendChild(createRadio))
    }
        
    
    createButton.innerText='Apagar'
}

function addDev(){

}
//Cadastrar dev - Salva as informações inseridas em um array e limpar os inputs

//mostrar o cadastro num cosole.log