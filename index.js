const $campoChave = document.querySelector('#campo-chave');
const $campoFrase = document.querySelector('#campo-frase');
const $fraseCriptografada = document.querySelector('.frase-criptografada');
const $botaoCriptografa = document.querySelector('.botao-criptografa');
const $container = document.querySelector('.container');

const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
let chaveIgualada = [];
let posicoesFrase = [];
let posicoesChave = [];

let frase;
let chave;

$botaoCriptografa.addEventListener('click', () =>{
    reset();
    igualarChave();
    criptografa();
})

$campoChave.addEventListener('change', () =>{
    chave = $campoChave.value.toLowerCase();
})

$campoFrase.addEventListener('change', () =>{
    frase = $campoFrase.value.toLowerCase();
})

const igualarChave = () =>{
    [...chave].map(letra =>{
        if (frase.length == chaveIgualada.length) return;
        chaveIgualada.push(letra);
    })
    if (frase.length == chaveIgualada.length) return;
    igualarChave();
}

const posicionaFrase = () =>{
    [...frase].map(letraFrase =>{
    [...alfabeto].map((letraAlfabeto, index) =>{
            if (letraAlfabeto === letraFrase) posicoesFrase.push(index);
        })
    });
}

const posicionaChave = () =>{
    [...chaveIgualada].map(letraFrase =>{
        [...alfabeto].map((letraAlfabeto, index) =>{
                if (letraAlfabeto === letraFrase) posicoesChave.push(index);
            })
        });
}

const criptografa = () =>{
    posicionaChave();
    posicionaFrase();
    for (i = 0; i < posicoesFrase.length; i++){
        imprimeFrase(i);
    }
}

const imprimeFrase = i =>{
    const alfabetoCriptografia = [...alfabeto];
    $fraseCriptografada.textContent = $fraseCriptografada.textContent + alfabetoCriptografia[(posicoesChave[i] + posicoesFrase[i]) % 26]
}

const reset = () =>{
    $fraseCriptografada.textContent = '';
    posicoesFrase = [];
}
