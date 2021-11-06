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


let relatorio=""

for( let info in cliente){
    if(typeof cliente[info] === "number" || typeof cliente[info]==="string"){
        relatorio += `
         ${info}:  ${cliente[info]}
         `
    }
}
console.log(relatorio) // nao exibirá a propriedade validaTeste e nem o seu valor