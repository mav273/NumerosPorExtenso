/* PROGRAMA COM MUITOS BUGS - O CERTO É O FOR NOMRAL */

//Import do objeto com os números
const {por_extenso} = require('./num_objeto')
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
    //Após a virgula ou ponto 


/* PROGRAMA COM MUITOS BUGS - O CERTO É O FOR NOMRAL */


    for (valor of array){

        const possui  = chaves.includes(valor)

        if (valor == 'e') anterior = valor
        if (valor == 'virgula' || valor == 'ponto' || valor == 'vírgula'){ 
                anterior  = valor 
                resultado = resultado
        }

        if (possui){
            const num = por_extenso[valor];

            if (anterior == 'e' || resultado == 0) resultado = resultado + num
            if (typeof anterior == 'number' ) resultado = (resultado - anterior) + (anterior * num)
            
            anterior = num
            /*
            if (anterior == 'virgula' || anterior == 'ponto' || anterior == 'vírgula') {
                if (anterior2 == 'e' || resultado2 == 0) resultado2 = resultado2 + num
                if (typeof anterior2 == 'number') resultado2 = resultado2 * num
                anterior2 = num
            }
             */
        }
    }

    console.log(resultado)
};
/* PROGRAMA COM MUITOS BUGS - O CERTO É O FOR NOMRAL */

const string = process.argv[2];
string2number(string);
