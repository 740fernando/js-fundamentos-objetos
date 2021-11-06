class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome=nome
        this.email=email
        this.saldo=saldo
    }
    depositar(valor){
        this.saldo+=valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca=saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca+=valor
    }
}

const fernando = new ClientePoupanca("Fernando","fao@email.com","xxx-222-444-77",100,200)

console.table(fernando)

fernando.depositar(100)

console.table(fernando)
