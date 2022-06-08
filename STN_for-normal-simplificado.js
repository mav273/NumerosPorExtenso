//Tentando deixar o codigo mais bonito

//Import do objeto com os números
const {por_extenso, maiorque999,decimal,negativos,tempo,soma,todos_arrays} = require('./num_objeto')
const chaves  = Object.keys(por_extenso)

function verificarDecimal(se){
    const dec = se.some(r => decimal.includes(r))
    if (dec){
        const verdadeiro = []
        for (valor of se){
            const tem = decimal.includes(valor)
            if (tem) verdadeiro.push(valor)
        }
        if (verdadeiro.length > 1) throw 'É permitido somente uma parte decimal'
        return verdadeiro
    }
    else return null
}
function verificarArray(array){
    const todos_arrays = []
    todos_arrays.push(chaves,decimal,negativos,soma)
    for (c of chaves) todos_arrays.push(c)
    for (d of decimal) todos_arrays.push(d)
    const extenso  = array.all(r => todos_arrays.includes(r))

    if (!extenso){
        throw 'String passada possui alguma palavra ou caractere invalidos'
    }
}
function string2number(string){
    //String sendo "organizada"
    const onespace   = string.replace(/  +/g, ' ')
    const onlyE      = onespace.replace(/, /g, ' e ')
    const trim       = onlyE.trim()
    const lower      = trim.toLowerCase()
    const tudo       = lower.split(' ')
    //const verificacao = verificarArray(tudo)
    let array  = tudo
    
    /*
    Lógica dos decimais: Caso haja um separador decimal (valores do array decimal), o
    array será dividido em dois, uma parte com o valor antes do decimal (array1) e uma parte com o valor após a decimal (array2). No final os valores serão colocados em uma string só. 
    */

    //verifica se a string possui numeros decimais
    const hasdecimal = verificarDecimal(tudo)
    let array2
    if (hasdecimal != null) { 
        const index  = tudo.indexOf(hasdecimal[0])
        array2 = tudo.slice(index, tudo.length)
    }
    let FirstResult
    let SecondResult
    //

    let resultado    = 0 
    let armazenado   = 0
    let anterior     = null


    let total = 0
    for (var i = 0;i < tudo.length;i++){
        //seleciona o valor que está sendo analisado no array
        const atual  = tudo[i]

        //Caso o valor seja o separador do decimal, reseta os valores e guarda o resultado anterior ao decimal
        if (decimal.includes(atual)){
            FirstResult   = resultado
            resultado  = 0
            armazenado = 0
            anterior   = null
            array      = array2
        }

        //verifica se o valor existe no por_extenso
        const possui = chaves.includes(atual)
        //verifica o valor através do nome por extenso
        const num = por_extenso[atual];
        //verifica se antes ou depois do valor atual, houve alguma interação com os valores maiores que mil
        const previous   = array.slice(0,i).some(r=> maiorque999.includes(r))
        const next       = array.slice(i + 1,array.length).some(r=> maiorque999.includes(r))
        //verifica se o valor atual é maior que 999 
        const morett     = maiorque999.includes(atual)

        //substituição do valor anterior com "e"
        if (atual == 'e') anterior = atual 
        if (possui){
            if(anterior == 'e' || resultado == 0){
                if (next){
                    resultado = resultado + num 
                    armazenado = armazenado + num
                }
                else resultado = resultado + num
            }
            if(typeof anterior == 'number'){
                if (!previous){
                    resultado = resultado * num 
                    armazenado = 0
                }
                if (previous && !next && !morett){ 
                    resultado = (resultado - anterior) + (anterior * num) 
                }
                if (previous && next){
                    resultado = (resultado - anterior) + (anterior * num)
                    armazenado = armazenado + num
                }
                if (morett && armazenado > 0){
                    resultado  = resultado - armazenado
                    armazenado = armazenado * num 
                    resultado  = resultado + armazenado
                    armazenado = 0 
                }
            }
            anterior = num
        }
    }

    //Caso a string passada tenha decimal, junte os dois valores e transforma a string em float
    if (hasdecimal != null){
        SecondResult = resultado
        total = ` ${FirstResult}.${SecondResult}`
        total = parseFloat(total)
    }
    else {
        total = resultado
    }
    //Caso o valor tem algo que indique que é BRL; adiciona R$ e limita o decimal para 2 casas 
    if(!(tudo.includes('reais')) && tudo.includes('centavos')){ 
        total = total/100
        total =  'R$ ' + parseFloat(total).toFixed(2)
    }
    if(tudo.includes('reais')) total = 'R$ '+ parseFloat(total).toFixed(2)

    //Caso o valor possua decimo, centesimo ou milesimo; adicione '0.'
    if(tudo.some(r => tempo.includes(r))){
        if (!(tudo.includes('inteiro')) || !(tudo.includes('inteiros'))){
            total = '0.' + total 
            total = parseFloat(total) 
        }
    }

    //Caso possua algum indicador de negativo; multiplique p resultado por -1
    if (tudo.some(r => negativos.includes(r))) total = total * -1
    
    return console.log(total)
}
    
module.exports = { string2number }