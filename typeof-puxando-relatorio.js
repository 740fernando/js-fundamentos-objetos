const cliente= {
    nome:"Fernando",
    idade:29,
    cpf:"12345678",
    email:"fernando@email.com",
    fones:["5555555","7777777777"],
    dependentes:[
        {
          nome:'Lauren Ribeiro',
          parentesco:'filha',
          dataNasc:'16/06/2017'  
        },
        {
          nome:'Christoffer Luiz',
          parentesco:'Sobrinho',
          dataNasc:'06/02/2015'
        }
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo+=valor
    },
    validaTeste:true
}

//percorre um objeto SEM precisar dos indices do array e cliente.cpf
//utilizamos o for in -> metódo para percorre um objeto

let relatorio=""

//para cada informacao do cliente
for(let info in cliente){
    if (typeof cliente[info]==='object'|| typeof cliente[info]==="function")
    {
        continue
    }else{
        relatorio +=`
        ${info} ===> ${cliente[info]}` //anotacao de colchetes serve para passar chave de objetos quando nao tem como escrever
    }
}
console.log(relatorio)