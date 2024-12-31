const form = document.getElementById('orderForm')
form.addEventListener("submit", ev=>{ 
    ev.preventDefault()
    const nameform =document.querySelector("input[name='name']").value
    const addressform =document.querySelector("input[name='address']").value
    const breadform =document.querySelector("select[name='breadType']").value
    const mainform =document.querySelector("input[name='main']").value
    const saladform =document.querySelector("input[name='salad']").value

    console.log([{nameform,addressform,breadform,mainform,saladform}])
})


