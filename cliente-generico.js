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
 const fernando= new Cliente('Fernando','77777','fernando@email.com',100);
 console.table(fernando)
