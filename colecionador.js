const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",
    adicionarTipo:function(propriedade,tipo){ //adiciona na propriedade
        this[propriedade].push(tipo)
      }
   }

   console.log(colecionador.nome)

   console.log(colecionador["nome"])

   console.log("Na primeira forma utilizamos a notação de ponto, muito comum em linguagens como Java e C. No segundo exemplo, acessamos usando os colchetes, de modo similar a acessar um array indexado por uma string. No JavaScript, objetos são classificados também como um array associativo (map ou dicionário).")

   for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
  }
  console.log(colecionador)