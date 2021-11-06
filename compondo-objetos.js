const cliente= {
    nome:"Fernando",
    idade:29,
    cpf:"12345678",
    email:"fernando@email.com",
    fones:["5555555","7777777777"]
}
//cria um objeto "dependentes" dentro do objeto "cliente"

cliente.dependentes={
    nome:"Lauren",
    parentesco:"filha",
    dataNascimento:"16/06/2017"
}

console.log(cliente)

//alterando uma propriedade de um objeto dentro de objeto

cliente.dependentes.nome="Lauren Ribeiro de Souza Vieira"
console.log(cliente)

//deletando

delete cliente.dependentes.dataNascimento
console.log(cliente)