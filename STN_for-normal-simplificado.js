//Tentando deixar o codigo mais bonito


//Import do objeto com os números
const {por_extenso, maiorque999,decimal,negativos} = require('./num_objeto')
const chaves  = Object.keys(por_extenso)

function verificarDecimal(se){
    const arr = se.split(' ')
    const dec = arr.some(r => decimal.includes(r))
    if (dec){
        const verdadeiro = []
        for (valor of decimal){
            const tem = arr.includes(valor)
            if (tem) verdadeiro.push(valor)
        }
        if (verdadeiro.length > 1) throw 'Só é permitido somente uma parte decimal'
        return verdadeiro
    }
    else return null
}

function string2number(string){
    //String sendo "ajeitada"
    const onespace   = string.replace(/  +/g, ' ')
    const trim       = onespace.trim()
    const lower      = trim.toLowerCase()
    const hasdecimal = verificarDecimal(lower)
    //verifica se a string possui numeros decimais
    let array
    let array2
    let stResult
    let ndResult
    let isdecimal = false
    let depois
    if (hasdecimal  != null){
        const ponto  = hasdecimal[0]
        const array1 = lower.split(ponto) 
        const antes  = array1[0]
        if (ponto != 'reais') {
            depois = array1[1]
            array2    = depois.split(' ')
        }
        array    = antes.split(' ')
    }
    else array = lower.split(' ')


    let resultado    = 0 
    let armazenado   = 0
    let anterior     = null


    let total = 0
    for (var i = 0;i < array.length;i++){
        //seleciona o valor que está sendo analisado no array
        const atual  = array[i]

        //Caso o valor seja o separador do decimal, reseta os valores e guarda o resultado anterior ao decimal
        if (decimal.includes(atual)) isdecimal  = true 
        if (decimal == true){
            stResult   = resultado
            armazenado = 0
            anterior   = 0
            array      = array2
        }

        
        //checa se o valor existe no por_extenso
        const possui = chaves.includes(atual)
        //pega o valor através do nome por extenso
        const num = por_extenso[atual];
        //checa se antes do valor atual, houve alguma interação com os valores maiores que mil
        const previous   = array.slice(0,i).some(r=> maiorque999.includes(r))
        const next       = array.slice(i + 1,array.length).some(r=> maiorque999.includes(r))
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
                    console.log(resultado,armazenado,anterior)
                    resultado  = resultado - armazenado
                    armazenado = armazenado * num 
                    resultado  = resultado + armazenado
                    armazenado = 0 
                }

            }
        anterior = num
        }
    }


    if (isdecimal){
        ndResult = resultado
        total = ` ${stResult}.${ndResult}`
        total = parseFloat(total)
    }
    else {
        total = resultado
    }
    
    if(lower.split(' ').includes('reais')) total = 'R$ '+ parseFloat(total).toFixed(2)

    if (lower.split(' ').some(r => negativos.includes(r))) total = total * -1
    console.log(total)
    
}
    


const string = process.argv[2];
string2number(string);