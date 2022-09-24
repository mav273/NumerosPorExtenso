const { string2number } = require('./app/word2num_grupo3')
const readline = require('readline')



const extens = process.argv[2]

function word2num(str){
  const r = string2number(str)
  return r
}

// for(i = 0; i<10; i++){
//   const string = prompt('Digite um valor por extenso:')
//   console.log(word2num(string))
// }

console.log(word2num(extens))
//--------------------------------------------------------------------

//Teste com pi e com virgula
pontopi = 'quatro por cento'
virgulapi = 'tres vírgula quatorze'

//console.log(word2num('quatro'))
// console.log(word2num(virgulapi))
// console.log(word2num('pi'))


//--------------------------------------------------------------------
//Teste com francionários
//doisoitavo = 'trinta e dois oitavos'
//cincomeios = 'seis setimos'

// console.log(word2num(doisoitavo))
//console.log(word2num(cincomeios))

//--------------------------------------------------------------------

//Teste com porcentagem
junto    = 'cento e trinta e quatro porcento'
separado =  'cinco mil por cento'

// console.log(word2num(junto))
// console.log(word2num(separado))

//--------------------------------------------------------------------

//Teste com duzias e meia(metade)
meia = 'meia'
meiaduzia = 'Meia Duzia'
tresduzias = 'Três Duzias'

// console.log(word2num(meia))
//console.log(word2num(meiaduzia))
// console.log(word2num(tresduzias))

//--------------------------------------------------------------------
//Dinheiro
centavo = 'dois centavos'
real = 'noventa mil reais e tres centavos'

// console.log(word2num(centavo))
// console.log(word2num(real))
//--------------------------------------------------------------------

//Negativos
menos    =  'menos menos noventa e sete mil' 
negativo =  'trinta e nove negativos'

// console.log(word2num(menos))
// console.log(word2num(negativo))

//--------------------------------------------------------------------

//Telefone
number = 'um sete quatro nove oito cinco'

//console.log(word2num(number))
//--------------------------------------------------------------------

//Espaço e CamelCase
errado = '  noventa   e  seis    '
Ccase   = 'NoVentA e sETE mil' 

// console.log(word2num(errado))
// console.log(word2num(Ccase))

//--------------------------------------------------------------------

//Decimais
decimo    = 'um decimo'
centesimo = 'um centesimo'
milesimo  = 'um milesimo'
grande    = 'noventa mil inteiros e trinta e um milesimos'

// console.log(word2num(decimo))
// console.log(word2num(centesimo))
// console.log(word2num(milesimo))
// console.log(word2num(grande))
//--------------------------------------------------------------------

//Portugal
dezesseis = 'dezasseis'
bilhao    = 'bilião'

// console.log(word2num(dezesseis))
//console.log(word2num(bilhao))

//--------------------------------------------------------------------

//Numero Grandes
tri = 'nove trilhões e trezentos e vinte bilhões e setenta e um milhões e novecentos e quarenta e três mil e duzentos e vinte e sete'
qua = 'quatro quadrilhões'

// console.log(word2num(tri))
// console.log(word2num(qua))
//--------------------------------------------------------------------

//Feminino
uma = 'uma'
duas = 'duas'

// console.log(word2num(uma))
// console.log(word2num(duas))
//--------------------------------------------------------------------
//module.exports = {word2num}
