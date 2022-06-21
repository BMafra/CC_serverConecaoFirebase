const crud = require('./crud')
//testes

async function salvarDado(){
    const savedData = await crud.save("pessoas", undefined, 
        {nome: "Bruna", sobrenome:"Mafra", idade: 17});
    console.log(savedData)
}

async function buscarDados(){
    const dados = await crud.get("pessoas");
    console.log(dados);
}

async function buscarDadosId(){
    const dados = await crud.getById("pessoas", "S7TPrSp26KNg0DuUfD7F");
    console.log(dados);
}

async function remove(){
    const dados = await crud.remove("pessoas", "S7TPrSp26KNg0DuUfD7F");
    console.log(dados);
}

buscarDadosId();
