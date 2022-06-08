/*
Cada objto tem um número, 
vai até bilhões,
foram adicionados números com e sem '~',
também foi adicionado o número no plural e singular
Não foram adicionados: Milesimos, ordinais, e formas femininas
*/

const por_extenso = {
zero: 0,
um: 1,
dois: 2,
três: 3,
tres: 3,
quatro: 4,
cinco: 5,
seis: 6,
meia: 6,
meio: 6,
sete: 7,
oito: 8,
nove: 9,

dez: 10,
decimos: 10,
décimos: 10,
décimo:10,
decimo:10,

onze: 11,
doze: 12,
treze: 13,
quartoze: 14,
catorze: 14,
quinze: 15,
dezesseis: 16,
dezessete: 17,
dezoito: 18,
dezenove: 19,
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
centésimos: 100,
centesimos: 100,
centésimo: 100,
centesimo: 100,

duzentos: 200,
trezentos:300,
quatrocentos: 400,
quinhentos: 500,
seiscentos: 600,
setecentos: 700,
oitocentos: 800,
novecentos: 900,

mil: 1000,
milesimo: 1000,
milésimo: 1000,
milesimos: 1000,
milésimos: 1000,

milhão: 1000000,
milhões: 1000000,
milhao: 1000000,
milhoes: 1000000,

bilhão: 1000000000,
bilhao: 1000000000,
bilhões: 1000000000,
bilhoes: 1000000000

};

const maiorque999 = [
    'mil', 'milésimo', 'milesimo', 'milesimos', 'milésimos','milhão','milhao','milhões','milhoes','bilhão','bilhao','bilhões','bilhoes'
]

const tempo = [
    'decimos',
    'décimos',
    'décimo',
    'decimo',
    'centésimos',
    'centesimos',
    'centésimo',
    'centesimo',
    'milesimos',
    'milésimos'

]

const decimal = ['virgula','ponto','vírgula','.','reais','inteiros','inteiro']

const negativos = ['menos','negativo','negativos']

const soma = ['e',',']



module.exports = {por_extenso, maiorque999,decimal,negativos,tempo,soma}