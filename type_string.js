const texto = "Olá, Mundo!";
const texto2 = 'Olá, Mundo!';
const senha = "senhaSuperSegura456!"
const stringNumbers = "34567"

const citacao = "O pedro disse: 'Oi!'"



//concatenar
const textonovo2 = 'meu nome é '
const nome = 'Pedro'
//console.log(textonovo2 + nome)


//template string ou template literal
const garoto = 'pedro'
const textonovo = `olá ${garoto}`

//console.log("O pedro disse:"+ `${textonovo}`+' epa\nolá' + ' aiai')

// const cifrao = '\u0024'
// const aMaiusculo = '\u0041'
// const tique = '\u2705'
// const hiragana = '\u3041'
// console.log(cifrao)
// console.log(aMaiusculo)
// console.log(tique)
// console.log(hiragana)


const cidade = "Cabo Frio"
const lugar = 'cabo FRio'

const cidade1 = cidade.toLowerCase();
const lugar1 = lugar;

console.log(cidade1 === lugar1.toLowerCase())
console.log(cidade.length)