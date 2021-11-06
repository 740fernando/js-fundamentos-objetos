function Cliente(nome,cpf, email,saldo)
{
    this.nome = nome
    this.cpf=cpf
    this.email=email
    this.saldo=saldo
    this.depositar= function(valor){
        this.saldo+=valor
    }
}
function ClientePoupanca(nome, cpf, email, saldo,saldoPoup){

    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const lauren = new ClientePoupanca("Lauren","55555555","lauren@email.com",100,200)

console.table(lauren)
 
// cria método no objeto 
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
lauren.depositarPoup(200)
console.log(lauren.saldoPoup)

/*
 um objeto JavaScript é criado ele tem propriedades particulares 
 (por exemplo, nome, cpf ou email) e também outras propriedades herdadas 
    do protótipo.
*/