//Import do objeto com os números
const {por_extenso, maiorque999} = require('./num_objeto')
const chaves  = Object.keys(por_extenso)
const valores = Object.values(por_extenso)

function string2number(string){
    //String sendo "ajeitada"
    const onespace = string.replace(/  +/g, ' ')
    const trim     = onespace.trim()
    const lower    = trim.toLowerCase()
    const array    = lower.split(' ')
    

    let resultado  = 0 
    let anterior   = null

    //for of estava cheio de bug
    var i = 0  
    for (i;i < array.length;i++){
        //seleciona o valor que está sendo analisado no array
        const atual  = array[i]
        //checa se o valor existe no por_extenso
        const possui = chaves.includes(atual)
        //pega o valor através do nome por extenso
        const num = por_extenso[atual];
        //checa se antes do valor atual, houve alguma interação com os valores maiores que mil
        const found = array.slice(0,i).some(r=> maiorque999.includes(r))

        //substituição do valor anterior com "e" ou ". ,"
        if (atual == 'e') anterior = atual
        if (atual == 'virgula' || atual == 'ponto' || atual == 'vírgula') anterior  = atual 

        if (possui){
            if (anterior == 'e' || resultado == 0) resultado = resultado + num
            if (typeof anterior == 'number' && !found) resultado = resultado * num
            if (typeof anterior == 'number' &&  found) resultado = (resultado - anterior) + (anterior * num)
            anterior = num
        }
    }
    console.log(resultado)
};

const string = process.argv[2];
string2number(string);

