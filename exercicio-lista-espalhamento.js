console.log("")
console.log("No vídeo anterior vimos um exemplo de uso do spread operator, ou sintaxe de espalhamento. Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. Vamos ver mais alguns exemplos:")
console.log("")
// const fichaGuerreiro = {
//     nome:"Aragorn",
//     classe:"guerreiro"
// }
// const equipoGuerreiro = {
//     espada:"Andúril",
//     capa:"capa élfica +2"
// }

// console.log("Vamos agora tentar juntar esses dois objetos em apenas um, que vamos chamar de personagens. Em um primeiro teste, vamos criar um novo objeto literal com { } e passar para este objeto as variáveis de cada personagem:")

// const guerreiroSemEspalhamento={fichaGuerreiro,equipoGuerreiro}
// const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
// console.table(guerreiroSemEspalhamento)
// console.table(guerreiro)

console.log("Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo:")

const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
    const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const ranger = {
    nome: "Legolas",
    classe: "ranger"
   }
const personagens = { ...mago, ...guerreiro, ...ranger }
console.table(personagens)
console.log("")
console.log("O JavaScript sobrescreveu as chaves com o mesmo nome a cada ocorrência, assim o resultado final foi somente o último objeto declarado dentro do objeto personagens.")
console.log("")
console.log("Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.")
