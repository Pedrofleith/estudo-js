// parâmetros de função

function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2,2));
console.log(soma(245,20));
console.log(soma(-500,60));


// parâmetros e argumentos

// ordem dos parâmetros


function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(16,'pedro'))

function multiplica(numero1 = 2, numero2 = 1){
    return numero1 * numero2;
}


                          //9         //6
console.log(multiplica(soma(4, 5),soma(3, 3)))



function comParametro(param) {
    console.log(param)
}
comParametro()