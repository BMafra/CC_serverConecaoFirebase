const crud = require('./crud')
//testes

async function salvarDado(){
    const savedData = await crud.save("pessoas", undefined, 
        {nome: "Bruna", sobrenome:"Mafra", idade: 17});
    console.log(savedData)
}

salvarDado();
