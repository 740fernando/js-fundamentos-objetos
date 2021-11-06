const cliente= {
    nome:"Fernando",
    idade:29,
    cpf:"12345678",
    email:"fernando@email.com",
    fones:["5555555","7777777777"],
    dependentes:[{
        nome:"Lauren",
        parentesco:"filha",
        dataNascimento:"16/06/2017"
    }]
}

//add + uma mais um elemento na lista dependentes
cliente.dependentes.push({
    nome:"Christoffer Luiz",
    parentesco:"sobrinho",
    dataNascimento:"06/02/2015"
})
console.log(cliente)

//filtra pela filha mais nova

filhaMaisNova =  cliente.dependentes.filter(element => element.dataNascimento==="16/06/2017");

console.log(filhaMaisNova)

console.log(filhaMaisNova[0].nome)

//filtra por sobrinho
sobrinho = cliente.dependentes.filter(sobrinho=> sobrinho.parentesco==="sobrinho")

console.log(sobrinho)