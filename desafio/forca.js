class Forca {

  constructor(palavra) {
    this.palavra = palavra;
    this.vidas = 6;
    this.letrasChutadas = [];
    this.acertos = esconderPalavra(palavra);
  }

  chutar(letra) {
    if ((letra.length <= 0) || (letra.length > 1) || (this.letrasChutadas.includes(letra))) {
      return ""
    }

    this.letrasChutadas.push(letra);
    if (!this.palavra.includes(letra)) {
      this.vidas--;

    } else {
      for (let pos in this.palavra) {
        if (letra == this.palavra[pos]) {
          this.acertos[pos] = letra;
        }
      }
    }
  }

  buscarEstado() {
    if (this.vidas == 0) {
      return "perdeu"
    }
    if (this.acertos.join("") == this.palavra) {
      return "ganhou"
    }
    return "aguardando chute"
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.acertos // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}


//// FUNÇÕES AUXILIARES ////
function esconderPalavra(palavra) {
  let palavraEscondida = []
  for (let _ in palavra) {
    palavraEscondida.push("_");
  }
  return palavraEscondida
}

module.exports = Forca;
