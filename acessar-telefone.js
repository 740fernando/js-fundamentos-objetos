const cliente= {
    nome:"Fernando",
    idade:29,
    cpf:"12345678",
    email:"fernando@email.com",
    fones:["5555555","7777777777"]
}
//percorre o array fones
cliente.fones.forEach(param=>console.log(param))
cliente.fones.push("2581-1000")

//adiciona um elemento na propriedade fone
cliente.fones.forEach(param=>console.log(param))
