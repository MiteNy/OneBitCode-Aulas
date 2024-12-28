function show(a){
    
    const ul = document.getElementById('contact-list')
    const newLi = document.createElement('li')
    newLi.className='liclass'
    newLi.innerText='teste'
    const texto = document.createElement('a')
    texto.innerText = ('teste')
    newLi.appendChild(texto)
    ul.appendChild(newLi)
}