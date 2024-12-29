function escalar(){
    const div = document.getElementById('escalacao')
    let position = document.querySelectorAll('#form1 input')
    console.log(position)
    let ul = document.createElement('ul')
    position.forEach((element) => {
        
        let li = document.createElement('li')
        ul.appendChild(li)
        li.innerText=+element.value

        console.log(element.value)
    });
    document.createElement('br')
    div.appendChild(ul)
    // ul.appendChild(li)
    // li.innerText=position[0].value
    // ul.appendChild(li)
    // ul.appendChild(li)
    // position = document.querySelectorAll('input').value=''
}