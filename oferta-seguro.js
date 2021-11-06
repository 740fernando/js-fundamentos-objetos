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




function oferecerSeguro(obj){
  const propsClientes= Object.keys(cliente)
  if(propsClientes.includes("dependentes")){
      console.log(`Oferta de seguro de vida para ${obj.dependentes.nome}`)
  }
}
console.log(Object.values(cliente))//mostra os valores das propriedades
console.log(Object.entries(cliente))// converte objeto para array
oferecerSeguro(cliente)