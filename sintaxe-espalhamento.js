const clientes = [
    {
        nome: "Fernando",
        cpf:"777.777.777-77",
        dependentes: [{
            nome:"Lauren",
            parentesco:"filha",
            dataNascimento:"16/06/2017"
        },
        {    
            nome:"Christtofer Luiz",
            parentesco:"sobrinho",
            dataNascimento:"06/02/2015"    
        }]
    },
    {
       nome:'Carla',
       cpf:'XXX.XXX.XXX-XX',
       dataNascimento:"10/08/1991",
       dependentes: [{
           nome:"Sofia",
           parentesco:"filha",
           dataNascimento:"07/07/77"
       }]
    }   
]

// const listaTeste = [clientes[0].dependentes,clientes[1].dependentes]
// console.table(listaTeste)

// const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]
// console.table(listaDependentes)


// usando o for
// const listaDependentes = [];

// for (i = 0; i < clientes.length; i++) {
//     listaDependentes.push(...clientes[i].dependentes);
// }

// console.table(listaDependentes);

//For Each
// const listaDependentes = [];
// clientes.forEach((cliente) => listaDependentes.push(...cliente.dependentes));

//Uma outra opção seria usar o flatMap:

const listaDependentes = clientes.flatMap((cliente) => cliente.dependentes);

console.table(listaDependentes)