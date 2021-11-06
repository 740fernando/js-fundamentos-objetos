const cliente= {
    nome:"Fernando",
    idade:29,
    cpf:"12345678",
    email:"fernando@email.com",
    fones:["5555555","7777777777"],
    dependentes:[
        {
        nome:"Lauren",
        parentesco:"filha",
        dataNascimento:"16/06/2017"},
        {
            nome:"Christoffer Luiz",
            parentesco:"sobrinho",
            dataNascimento:"06/02/2015"
        }
    ],
    saldo:100,
    depositar:function(valor)
    {
        this.saldo+=valor;
    }
}

console.log(cliente.saldo);
cliente.depositar(200);
console.log(cliente.saldo)