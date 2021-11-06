// const pessoa = {
//     nome:'Ana',
//     emai:'a@email.com',
//     imprimeNome: function(){
//         console.log(`${pessoa.nome}`)
//     }
// }
const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${this.nome}`)
    }
   }
console.log("Veja que o método imprimeNome() faz referência ao próprio objeto pessoa. O JavaScript tem uma forma melhor de fazer isso, que não “acopla” o método ao nome do objeto:")

pessoa.imprimeNome();
console.log()
console.log("Podemos visualizar melhor a utilização do this para “desacoplar” o método do objeto com um outro exemplo:")

function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
   }
   const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
   }

   const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   pessoa1.imprimeInfo()
   //nome: Ana, email a@email.com
   pessoa2.imprimeInfo()
   //nome: Paula, email p@email.com

   console.log("Dentro de cada objeto, criamos um método que chama a função externa imprimeNomeEmail(). Essa função é executada no contexto de cada um dos objetos e o this faz com que ela utilize os valores de propriedade desses objetos.")

   function Pessoa(nome, email){
    this.nome =nome
    this.email =email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
   }

   const pessoa3 = new Pessoa("Ana", "a@email.com")
const pessoa4= new Pessoa("Paula", "p@email.com")

pessoa3.imprimeNomeEmail()
// nome: Ana, email: a@email.com
pessoa4.imprimeNomeEmail()
// nome: Paula, email: p@email.com