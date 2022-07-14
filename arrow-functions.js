function apresentar(nome){
    return `meu nome é ${nome}`
}

// função arrow function, pois ela só faz uma ação
const apresentarArrow = nome => `meu nome é ${nome}`;

// a gente usa parentese pois estamos passando 2 argumentos
const soma = (num1, num2) => num1 + num2;

// a arrow function sempre vendo como uma const, ela não pode ser nomeado, mas ele sempre vem uma const e o nome da variável que vamos usar

// quando usamos mais de uma linha de instruções, precisamos usar chaves
                                      //seta (arrow) é diferente do operador de >= (maior igual)
const somarNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return 'somentes números de 1 a 9'
    }else{
        return num1 + num2
    }
}  

// se não tem suporte do HOISTING do mesmo jeito que expressão de função, ou seja temos que declarar elas no começo do código, pois senão conseguiriamos usar em qualquer lugar como o modo de declaração de função.

