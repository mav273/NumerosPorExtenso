//Tentando deixar o codigo mais bonito


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
    let resultado2  = 0 
    let armazenado2   = 0
    let anterior2   = null

    let total = 0

    var i = 0  
    for (i;i < array.length;i++){
        //seleciona o valor que está sendo analisado no array
        const atual  = array[i]
        //checa se o valor existe no por_extenso
        const possui = chaves.includes(atual)
        //pega o valor através do nome por extenso
        const num = por_extenso[atual];
        //checa se antes do valor atual, houve alguma interação com os valores maiores que mil
        const previous   = array.slice(0,i).some(r=> maiorque999.includes(r))
        const next       = array.slice(i + 1,array.length).some(r=> maiorque999.includes(r))
        const morett     = maiorque999.includes(atual)

        //substituição do valor anterior com "e" ou ". ,"
        if (decimal.includes(atual)) isdecimal  = true 
        if (atual == 'e') anterior = atual        

        if (isdecimal == false){
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

        else{
            if (possui){
                if(anterior2 == 'e' || resultado2 == 0){
                    if (next){
                        resultado2 = resultado2 + num 
                        armazenado2 = armazenado2 + num
                    }
                    else resultado2 = resultado2 + num
                }
                if(typeof anterior2 == 'number'){
                    if (!previous){
                        resultado2 = resultado2 * num 
                        armazenado2 = 0
                    }
                    if (previous && !next && !morett){ 
                        resultado2 = (resultado2 - anterior2) + (anterior2 * num) 
                    }
                    if (previous && next){
                        resultado2 = (resultado2 - anterior2) + (anterior2 * num)
                        armazenado2 = armazenado2 + num
                    }
                    if (morett && armazenado2 > 0){
                        resultado2  = resultado2 - armazenado2
                        armazenado2 = armazenado2 * num 
                        resultado2  = resultado2 + armazenado2
                        armazenado2 = 0 
                    }

                }
                anterior2 = num
            }

        }
        

    }


    if (isdecimal){
        total = ` ${resultado}.${resultado2}`
        total = parseFloat(total)
    }
    else {
        total = resultado
    }
    if(array.includes('reais')) total = 'R$ '+ parseFloat(total).toFixed(2)

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