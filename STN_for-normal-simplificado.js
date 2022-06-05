//Import do objeto com os números
const {por_extenso, maiorque999,decimal,negativos} = require('./num_objeto')
const chaves  = Object.keys(por_extenso)
const valores = Object.values(por_extenso)

function string2number(string){
    //String sendo "ajeitada"
    const onespace = string.replace(/  +/g, ' ')
    const trim     = onespace.trim()
    const lower    = trim.toLowerCase()
    const array    = lower.split(' ')
    

    // Para string sem valores decimais
    let resultado  = 0 
    let armazenado   = 0
    let anterior   = null

    // Para string com valores decimais
    let isdecimal  = false
    let resultado1 = 0



    let total = 0

    var i = 0  
    for (i;i < array.length;i++){


        //seleciona o valor que está sendo analisado no array
        const atual  = array[i]
        //checa se o valor existe no por_extenso
        const possui = chaves.includes(atual)
        //pega o valor através do nome por extenso
        const num = por_extenso[atual];
        //checa se antes do valor atual e depois, os valores maiores que mil apareceram
        const previous   = array.slice(0,i).some(r=> maiorque999.includes(r))
        const next       = array.slice(i + 1,array.length).some(r=> maiorque999.includes(r))
        //verifica se o valor atual é >= 1000
        const morett     = maiorque999.includes(atual)

        //substituição do valor anterior com "e" ou ". ,"
        if (decimal.includes(atual)) isdecimal  = true 
        if (atual == 'e') anterior = atual        

        //se tiver trantando a string após o decimal, reseta os valores
        if (isdecimal == true){
            resultado1 = resultado
            resultado = 0
            armazenado = 0
            anterior   = null
        }

        console.log(isdecimal,resultado,resultado1,armazenado,anterior)
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
        
        


    if (isdecimal){
        total = ` ${resultado1}.${resultado}`
        total = parseFloat(total)
    }
    else {
        total = resultado
    }
    if ( array.some(r => negativos.includes(r))) total = total * -1
    console.log(total)
    
}


const string = process.argv[2];
string2number(string);


//só fazer a soma se não tiver maior que mil

        /*if (possui){
            if (typeof anterior == 'number' && !previous) 
            if (typeof anterior == 'number' &&  previous) 
            if (typeof anterior == 'number' && previous && next) armazenado = armazenado + num 

        */