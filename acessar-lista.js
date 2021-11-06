const cliente = {
    nome:"Fernando",
    idade:29,
    cpf:"48825769829",
    email:"fsouviei@emeal.com"
}

const chaves = ["nome","idade","cpf","email"]

const chave = "nome"

console.log(cliente[chave])

console.log(cliente[chaves[0]]);

console.log(cliente.chave) //undefied

chaves.forEach(info=> console.log(cliente[info]))

console.log(cliente["nome"])

console.log(cliente.nome.toUpperCase())
