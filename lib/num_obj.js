const por_extenso = {
pi: 3.14159,
zero: 0,
  
meio: 1/2,
meios: 1/2,
terços: 1/3,
terço: 1/3,
quarto: 1/4,
quartos: 1/4,
quinto:  1/5,
quintos: 1/5,
sexto: 1/6,
sextos: 1/6,
setimo: 1/7,
setimos: 1/7,
oitavo: 1/8,
oitavos: 1/8,
  
hum: 1,
um: 1,
uma: 1,
dois: 2,
duas: 2,
três: 3,
tres: 3,
quatro: 4,
cinco: 5,
seis: 6,
meia: 6,
sete: 7,
oito: 8,
nove: 9,
dez: 10,
// decimos: 10,
// décimos: 10,
// décimo: 10,
// décima: 10,
// decimo: 10,
// decima: 10,

onze: 11,
doze: 12,
duzia: 12,
dúzia: 12,
duzias: 12,
dúzias: 12,
treze: 13,
quatorze: 14,
catorze: 14,
quinze: 15,
dezesseis: 16,
dezasseis: 16,
dezessete: 17,
dezassete: 17,
dezoito: 18,
dezenove: 19,
dezanove: 19,
vinte: 20,
trinta: 30,
quarenta: 40,
cinquenta: 50,
sessenta: 60,
setenta: 70,
oitenta: 80,
noventa: 90,

cem: 100,
cento:100,
centos:100,
// centésimos: 100,
// centésimas: 100,
// centesimos: 100,
// centesimas: 100,
// centésimo: 100,
// centésima: 100,
// centesimo: 100,
// centesima: 100,

duzentos: 200,
duzentas: 200,
trezentos: 300,
trezentas: 300,
quatrocentos: 400,
quatrocentas: 400,
quinhentos: 500,
quinhentas: 500,
seiscentos: 600,
seiscentas: 600,
setecentos: 700,
setecentas: 700,
oitocentos: 800,
oitocentas: 800,
novecentos: 900,
novecentas: 900,

mil: 1000,
// milesimo: 1000,
// milésimo: 1000,
// milesimos: 1000,
// milésimos: 1000,
// milesima: 1000,
// milésima: 1000,
// milesimas: 1000,
// milésimas: 1000,

milhão:  1e6,
milhões: 1e6,
milhao:  1e6,
milhoes: 1e6,

bilhão: 1e9,
bilião: 1e12,
biliao: 1e12,
bilhao: 1e9,
bilhões: 1e9,
biliões: 1e12,
bilhoes: 1e9,
bilioes: 1e12,
  
trilhão: 1e12,
trilhao: 1e12,
trilião: 1e15,
triliao: 1e15,
trilhões: 1e12,
trilhoes: 1e12,
triliões: 1e15,
trilioes: 1e15,
  
quatrilhão: 1e15,
quatilhao: 1e15,
quatrilião: 1e18,
quatriliao: 1e18,
quatrilhões: 1e15,
quatrilhoes: 1e15,
quatriliões: 1e18,
quatrilioes: 1e18,

quadrilhão: 1e15,
quadilhao: 1e15,
quadrilião: 1e18,
quadriliao: 1e18,
quadrilhões: 1e15,
quadrilhoes: 1e15,
quadriliões: 1e18,
quadrilioes: 1e18,

quintilhão : 1e18,
quintilhao : 1e18,
quintilião : 1e21,
quintiliao : 1e21,
quintilhões: 1e18,
quintilhoes: 1e18,
quintiliões: 1e21,
quintilioes: 1e21,

sextilhão : 1e21,
sextilhao : 1e21,
sextiliao : 1e24,
sextilião : 1e24,
sextilhões : 1e21,
sextilhoes : 1e21,
sextiiões  : 1e24,
sextilioes : 1e24
};

function bigger(){
  let maior = []

  let len = Object.keys(por_extenso).length
  for (var i = 0 ;i < len;i++){
    atual = Object.values(por_extenso)[i]
    if (atual > 999) {
      maior.push(Object.keys(por_extenso)[i])
    }
  }  
  return maior
}
const maiorque999 = bigger() 
//const maiorque999 = [
//   'mil', 
//   'milésimo', 
//   'milesimo', 
//   'milesimos', 
//   'milésimos',
//   'milhão',
//   'milhao',
//   'milhões',
//   'milhoes',
//   'bilhão',
//   'bilião',
//   'bilhao',
//   'biliao',
//   'bilhões',
//   'bilhoes',
//   'biliões',
//   'bilioes',
//   'trilhão',
//   'trilhao',
//   'trilião',
//   'triliao',
//   'trilhões',
//   'trilhoes',
//   'triliões',
//   'trilioes',
//   'quatrilhão',
//   'quatilhao',
//   'quatrilião',
//   'quatriliao',
//   'quatrilhões',
//   'quatrilhoes',
//   'quatriliões',
//   'quatrilioes',
//   'quadrilhão',
//   'quadilhao',
//   'quadrilião',
//   'quadriliao',
//   'quadrilhões',
//   'quadrilhoes',
//   'quadriliões',
//   'quadrilioes',
//   'quintilhão',
//   'quintilhao',
//   'quintilião',
//   'quintiliao',
//   'quintilhões',
//   'quintilhoes',
//   'quintiliões',
//   'quintilioes'
// ]

const tempo = [
    'decimos',
    'decimas',
    'décimos',
    'décimas',
    'décimo',
    'décima',
    'decimo',
    'decima',
    'centésimos',
    'centésimas',
    'centesimos',
    'centesimas',
    'centésimo',
    'centésima',
    'centesimo',
    'centesima',
    'milesimo',
    'milésimo',
    'milesima',
    'milésima',
    'milesimos',
    'milesimas',
    'milésimos',
    'milesimas'
]  //Decimos, Centésimos e Milésimos

const tempodec = [
    'decimos',
    'decimas',
    'décimos',
    'décimas',
    'décimo',
    'décima',
    'decimo',
    'decima'
] //Decimos

const tempocen = [
    'centésimos',
    'centésimas',
    'centesimos',
    'centesimas',
    'centésimo',
    'centésima',
    'centesimo',
    'centesima'
] // Centésimos

const tempomil = [
    'milesimo',
    'milésimo',
    'milesima',
    'milésima',
    'milesimos',
    'milesimas',
    'milésimos',
    'milesimas'
]  // Milésimos

const decimal = ['virgula','ponto','vírgula','.','reais','real','inteiros','inteiro']

const negativos = ['menos','negativo','negativos']

const soma = ['e',',']

const porcentagem = ['porcento', 'porcentos']

const duzias = ['duzias','dúzia','dúzias','duzia']

const fracao = [
'meio','meios','terço','terços','quarto','quartos','quinto','quintos','sexto','sextos','setimo','setimos','oitavo','oitavos'] //meio,terço,quinto, etc

module.exports = {por_extenso, maiorque999,decimal,negativos,tempo,soma,porcentagem,fracao,duzias,tempodec,tempomil,tempocen}