let menu
let vagas = [
    {id:0, nome: "Assistente ADM", descricao: "Ensino superior em administração", dataLimite: "24/12/2024" },
    {id:1, nome: "Analista Financeiro", descricao: "Ensino superior em contabilidade", dataLimite: "30/12/2024" },
    {id:2, nome: "Desenvolvedor Web", descricao: "Conhecimentos em HTML, CSS, e JavaScript", dataLimite: "15/01/2025" },
    {id:3, nome: "Engenheiro de Dados", descricao: "Ensino superior em ciência da computação", dataLimite: "01/02/2025" },
    {id:4, nome: "Designer Gráfico", descricao: "Experiência em ferramentas de design", dataLimite: "10/01/2025" },
    {id:5, nome: "Consultor de Vendas", descricao: "Habilidade em negociação e comunicação", dataLimite: "31/12/2024" },
    {id:6, nome: "Técnico em TI", descricao: "Ensino técnico em informática", dataLimite: "20/12/2024" }
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
            alert(listarVagas(vagas))
            break
        case 2:
            criarVaga(vagas)
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
    let lista = ""
    vagas.forEach((vaga,index) => lista+=(index+" - "+ vaga.nome +' - '+ candidatos.filter(qtdAluno => qtdAluno.curso == vaga.id ).length+' Candidatos\n'));
    return lista
}
// Opção 2
function criarVaga(){
    let cadastro=[]
    cadastro.push({id:vagas.length,nome:prompt("Nome:"),descricao:prompt("Descrição:"),dataLimite:prompt("Data Limite:")})
    confirm("Confirmar vaga? \nNome:"+ cadastro[0].nome+ "\nDescrição: "+cadastro[0].descricao+ "\nData Limite: "+cadastro[0].dataLimite)? vagas.push(cadastro[0]):vagas
    console.log(vagas)
}
// Opção 3
function visualizarVaga(nomescandidatos="\nAlunos:"){
    let escolha = parseFloat(prompt(listarVagas()))
    candidatos.forEach(candidatoVaga => candidatoVaga.curso == escolha? nomescandidatos+=("\n"+candidatoVaga.aluno):candidatoVaga);
    alert(vagas[escolha].nome+"\n"+"Descrição: "+vagas[escolha].descricao+"\n"+"Data Limite: "+vagas[escolha].dataLimite+nomescandidatos)

    // vagas.forEach(vaga => {
    //     alert("Nome: "+vaga.nome+ "\nDescrição: " +vaga.descricao+" \nData limite para inscrição: "+ vaga.dataLimite)
    // });
}
// Opção 4
function inscreverCandidato(){
    let cadastro=[]
    cadastro.push({curso:prompt(listarVagas()+"Índice do curso:"),aluno:prompt("Nome do aluno: ")})
    confirm("Confirmar vaga? \nÍndice do curso: "+ cadastro[0].curso+ "\nNome do aluno: "+cadastro[0].aluno)? candidatos.push(cadastro[0]):
    console.log(candidatos)
}
// Opção 5

function excluirVaga(){
    let cadastro=parseFloat(prompt("Digite qual curso deseja deletar:\n"+listarVagas()))
    confirm("Deletar vaga e seus candidatos? \nNome:"+ vagas[cadastro].nome+ "\nDescrição: "+vagas[cadastro].descricao+ "\nData Limite: "+vagas[cadastro].dataLimite)? vagas.splice(cadastro,1):
    console.log(vagas)
}