const $campoChave = document.querySelector("#campo-chave");
const $campoFrase = document.querySelector("#campo-frase");
const $fraseCriptografada = document.querySelector(".frase-criptografada");
const $botaoCriptografa = document.querySelector(".botao-criptografa");
const $container = document.querySelector(".container");

const alfabeto = "abcdefghijklmnopqrstuvwxyz";
let fraseCifrada = [];

let frase;
let chave;

$botaoCriptografa.addEventListener("click", () => {
  reset();
  criptografa();
  imprimeFrase();
});

$campoChave.addEventListener("change", () => {
  chave = $campoChave.value.toLowerCase();
});

$campoFrase.addEventListener("change", () => {
  frase = $campoFrase.value.toLowerCase();
});

const criptografa = () => {
  const posicaoChave = [];
  const posicaoFrase = [];
  [...frase].map((letraFrase, indexFrase) => {
    const letraChave = chave[indexFrase % chave.length];
    [...alfabeto].map((letraAlfabeto, indexAlfabeto) => {
      if (letraAlfabeto === letraChave) {
        posicaoChave.push(indexAlfabeto);
      }
      if (letraAlfabeto === letraFrase) {
        posicaoFrase.push(indexAlfabeto);
      }
    });
    if (letraFrase === " ") {
      posicaoChave.push(" ");
      posicaoFrase.push(" ");
      fraseCifrada.push(" ");
    } else {
      fraseCifrada.push(
        alfabeto[(posicaoChave[indexFrase] + posicaoFrase[indexFrase]) % 26]
      );
    }

  });
};

const imprimeFrase = () => {
  $fraseCriptografada.textContent = fraseCifrada.join("");
};

const reset = () => {
  fraseCifrada = [];
  $fraseCriptografada.textContent = "";
};
