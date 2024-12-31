function cadastrar(ev){
    
    const sectionElement = ev.currentTarget.parentNode //Ev é o parametro recebido na função, addEventListener; CurrentTarget é o 
    const user = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value
    if (password === passwordConfirmation){
        alert('Usuário cadastrado com sucesso!')
    }else (alert('As senhas não coincidem!)'))
    console.log(user)
    console.log(password)
    console.log(passwordConfirmation)
}

const botao = document.getElementById('Register-button')
botao.addEventListener('click',cadastrar)