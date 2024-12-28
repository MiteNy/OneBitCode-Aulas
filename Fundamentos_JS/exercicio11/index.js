function escalar(){
    const div = document.getElementById('escalacao')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    let position = document.querySelectorAll('#form1 input')
    console.log(position)
    div.appendChild(ul)
    position.forEach((element,index) => {
        
        ul.appendChild(li)
        document.createElement("p")
        li.innerText=element.value
        console.log(element.value)
    });
    
    // ul.appendChild(li)
    // li.innerText=position[0].value
    ul.appendChild(li)
    ul.appendChild(li)
    li.innerText=position[0].value
    // position = document.querySelectorAll('input').value=''
    
    
}