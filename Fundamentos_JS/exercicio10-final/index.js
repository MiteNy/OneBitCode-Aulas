let menu
let vagas = [
    { nome: "Assistente ADM", descricao: "Ensino superior em administração", dataLimite: "24/12/2024" },
    { nome: "Analista Financeiro", descricao: "Ensino superior em contabilidade", dataLimite: "30/12/2024" },
    { nome: "Desenvolvedor Web", descricao: "Conhecimentos em HTML, CSS, e JavaScript", dataLimite: "15/01/2025" },
    { nome: "Engenheiro de Dados", descricao: "Ensino superior em ciência da computação", dataLimite: "01/02/2025" },
    { nome: "Designer Gráfico", descricao: "Experiência em ferramentas de design", dataLimite: "10/01/2025" },
    { nome: "Consultor de Vendas", descricao: "Habilidade em negociação e comunicação", dataLimite: "31/12/2024" },
    { nome: "Técnico em TI", descricao: "Ensino técnico em informática", dataLimite: "20/12/2024" }
    ]
let candidatos= [
    {curso:1 ,aluno:"João"},
    {curso:1 ,aluno:"Pedro"},
    {curso:2 ,aluno:"Izac"},
    {curso:3 ,aluno:"Maria"},
    {curso:4 ,aluno:"Juliano"}
    ]
do {
    menu = parseFloat(prompt('Opções: \n 1 - Listar vagas \n 2 - Criar uma nova vaga \n 3 - Visualizar uma vaga \n 4 - Inscrever um candidato em uma vaga \n 5 - Excluir uma vaga \n 6 - Sair'))
    switch (menu){
        case 1:
            listarVagas(vagas)
            break
        case 2:
            criarVaga()
            break  
        case 3:
            visualizarVaga()
            break
        case 4:
            inscreverCandidato()
            break
        case 5:
            excluirVaga()
            break
        case 6:
            console.log("Saindo..")
            break
        
    }
} while (menu !== 6);
// Opção 1
function listarVagas(){
    vagas.forEach((vaga,index) => console.log(index+" - "+ vaga.nome +' - '+ candidatos.filter(qtdAluno => qtdAluno.curso == index ).length+' Candidatos'));
}

function criarVaga(){
    cadastro+=[{nome:prompt("Nome:"),descricao:prompt("Descrição:"),dataLimite:prompt("Data Limite:")}]
    console.log(cadastro)
    // alert("Confirmar vaga? \nNome:"+ cadastro.nome+ "\nDescrição: "+cadastro.descricao+ "\nData Limite: "+cadastro.dataLimite)? vagas.push(cadastro):criarVaga()
}

function visualizarVaga(){
    vagas.forEach(vaga => {
        alert("Nome: "+vaga.nome+ "\nDescrição: " +vaga.descricao+" \nData limite para inscrição: "+ vaga.dataLimite)
    });
}