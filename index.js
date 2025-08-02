console.log("DESAFIO: NÍVEL DO HERÓI");

function determinarNivel(nivel) {
  if (nivel <= 1000) {
    return "Ferro";
  } else if (nivel <= 2000) {
    return "Bronze";
  } else if (nivel <= 5000) {
    return "Prata Ouro";
  } else if (nivel <= 8000) {
    return "Platina Diamante";
  } else if (nivel <= 9000) {
    return "Ascendente";
  } else if (nivel <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

let nivelHeroi = 1313;
console.log("O nível do seu herói é: " + determinarNivel(nivelHeroi));