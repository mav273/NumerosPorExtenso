//Tentando deixar o codigo mais bonito

//Import do objeto com os números
const {por_extenso, maiorque999,decimal,negativos} = require('./num_objeto')
const chaves  = Object.keys(por_extenso)

function verificarDecimal(se){
    const dec = se.some(r => decimal.includes(r))
    if (dec){
        const verdadeiro = []
        for (valor of decimal){
            const tem = se.includes(valor)
            if (tem) verdadeiro.push(valor)
        }
        if (verdadeiro.length > 1) throw 'É permitido somente uma parte decimal'
        return verdadeiro
    }
    else return null
}

function string2number(string){
    //String sendo "organizada"
    const onespace   = string.replace(/  +/g, ' ')
    const onlyE      = onespace.replace(/, /g, ' e ')
    const trim       = onlyE.trim()
    const lower      = trim.toLowerCase()
    const tudo       = lower.split(' ')
    const hasdecimal = verificarDecimal(tudo)
    //verifica se a string possui numeros decimais
    let array  = tudo
    let array2
    if (hasdecimal != null) { 
        const index  = tudo.indexOf(hasdecimal[0])
        array2 = tudo.slice(index, tudo.length)
    }
    let stResult
    let ndResult
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
            stResult   = resultado
            resultado  = 0
            armazenado = 0
            anterior   = null
            array      = array2
        }


        //verifica se o valor existe no por_extenso
        const possui = chaves.includes(atual)
        //verifica o valor através do nome por extenso
        const num = por_extenso[atual];
        //verifica se antes do valor atual, houve alguma interação com os valores maiores que mil
        const previous   = array.slice(0,i).some(r=> maiorque999.includes(r))
        const next       = array.slice(i + 1,array.length).some(r=> maiorque999.includes(r))
        const morett     = maiorque999.includes(atual)

        //substituição do valor anterior com "e" ou ","
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


    if (hasdecimal != null){
        ndResult = resultado
        total = ` ${stResult}.${ndResult}`
        total = parseFloat(total)
    }
    else {
        total = resultado
    }
    if(!(tudo.includes('reais')) && tudo.includes('centavos')){ 
        total = total/100
        total =  'R$ ' + parseFloat(total).toFixed(2)
    }
    if(tudo.includes('reais')) total = 'R$ '+ parseFloat(total).toFixed(2)

    if (tudo.some(r => negativos.includes(r))) total = total * -1
    console.log(total)
}
    
module.exports = { string2number }