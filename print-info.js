const listaCPFs=["38824769829","38824769825","38824769829"]

// const cliente = ["nome","André","idade",36]

const cliente = {
    nome:"Fernando Luiz de Souza Vieira",
    idade:29,
    cpf:"38824769829",
    email:"fsouviei@emeal.nttdata.com"
}

 console.log(`Meu nome é ${cliente.nome},tenho ${cliente.idade},meu cpf : ${cliente.cpf},
 ,meu email : ${cliente.email}`);
 console.log(cliente.cpf.substring(0,3))