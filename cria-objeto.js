const peterPark= {
    nome:"Peter Park",
    profissao:"Fotografo",
    formacao:"Cursando Ciencias"
}
console.log(peterPark)

// adiciona propriedade
peterPark.poder="Poder de aranha"
peterPark.simbiose="Venom"

console.log(peterPark)

//remove propriedade
delete peterPark.simbiose
console.log(peterPark);

//alterar
peterPark.poder="escalar predios, soltar teias e sentido aranha"
console.log(peterPark);
