const {por_extenso, maiorque999,decimal,negativos,tempo,soma,porcentagem,duzias,fracao,tempodec, tempocen, tempomil} = require('../lib/num_obj.js')
const chaves  = Object.keys(por_extenso)
function verificarDecimal(se){
    const dec = se.some(r => decimal.includes(r))
    if (dec){
        const verdadeiro = []
        for (valor of se){
            const tem = decimal.includes(valor)
            if (tem) verdadeiro.push(valor)
        }
        if (verdadeiro.length > 1) throw new Error('É permitido somente uma parte decimal')
        return verdadeiro
    }
    else return null
}
function verificarDecimomilesimo(se){
    const dec = se.some(r => tempo.includes(r))
    if (dec){
        const verdadeiro = []
        for (valor of se){
            const tem = tempo.includes(valor)
            if (tem) verdadeiro.push(valor)
        }
        if (verdadeiro.length > 1) throw new Error('Só aceitamos um valor decimal(decimo, milesimo e centesimo)')
        return verdadeiro
    }
    else return null
}
function verificarArray(array){
    let errados      = []
    const todos_arrays = ['centavos','centavo','por']

    for (c  of chaves) todos_arrays.push(c)
    for (d  of decimal) todos_arrays.push(d)
    for (n  of negativos) todos_arrays.push(n)
    for (t  of tempo) todos_arrays.push(t)
    for (m  of maiorque999) todos_arrays.push(m)
    for (s  of soma) todos_arrays.push(s)
    for (f  of fracao) todos_arrays.push(f)
    for (p  of porcentagem) todos_arrays.push(p)
    for (du of duzias) todos_arrays.push(du)

    
    for (value of array){
      const acertou = todos_arrays.includes(value)
      if (!acertou) errados.push(value)
    }

    if (errados.length > 0) throw new Error( 'Resultado está errado, algumas palavras não foram aceitas: ' + errados)
    

}
function toMoeda(number){
  if (number < 10){
    const ajeita = '0' + number 
    
      return ajeita 
  }
  else return number
}

function string2number(string){

    const str = String(string)
    //String sendo "organizada"
    const onespace   = str.replace(/  +/g, ' ')
    const onlyE      = onespace.replace(/, /g, ' e ')
    const trim       = onlyE.trim()
    const lower      = trim.toLowerCase()
    const tudo       = lower.split(' ')
    const verificacao = verificarArray(tudo)
    const decimomilesimo = verificarDecimomilesimo(tudo) 
    let array  = tudo
  
    //verifica se a string possui numeros decimais
    const hasdecimal = verificarDecimal(tudo)
    let array2
    if (hasdecimal != null) { 
        const index  = tudo.indexOf(hasdecimal[0])
        array2 = tudo.slice(index, tudo.length)
    }
    let FirstResult
    let SecondResult

    //Variáveis usadas para guardar os valores já lidos
    let resultado    = 0 
    let armazenado   = 0
    let anterior     = null

    //resultado final após passar pelo FOR 
    let total = 0

    //Trata cada valor da string
    for (var i = 0;i < tudo.length;i++){
        //seleciona o valor que está sendo analisado no array
        let atual  = tudo[i]
        if (atual == 'cento' || atual == 'centos'){
          if (anterior == 'por'){
              atual = 'porcento'
              var temporcento = true
          }
          else atual = atual
        }
  
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

        // Verifica se o valor possui numeros relacionados à tempo (decimo, milesimo); se o valor é uma duzia;se o valor é uma fração(um meio // dois terços // tres oitavos)
        const temtempo   = tempo.includes(atual)
        const temduzia   = duzias.includes(atual)
        const temfracao  = fracao.includes(atual)
      

        //substituição do valor anterior com "e"
        if (atual == 'e') anterior = atual 
        if (atual == 'por') anterior = atual 


        //Caso o valor analisado estaja na nossa lista de por_extenso, faça as operações
        if (possui){
            //Caso o valor anterior seja 'e' ou o valor analisado seja a primeira entrada da string,
            // Some com o resultado
            if(anterior == 'e' || resultado == 0){
                if (next){
                    resultado = resultado + num 
                    armazenado = armazenado + num
                }
                else resultado = resultado + num
            }
            if(typeof anterior == 'number'){
                if (!previous){
                    if (num > 99 || temtempo || temduzia || temfracao)
                    resultado = resultado * num 
                    armazenado = 0
                }
                if (duzias.includes(atual) && array[i-1] == 'meia' ){
                  resultado = resultado - 6
                  resultado = num * 0.5
                }
                if (num < 100 && !temtempo && !temduzia && !temfracao){
                    resultado = parseInt(`${resultado}${num}`)
                }
                if (previous && !next && !morett){ 
                    resultado = (resultado - anterior) + (anterior * num) 
                }
                if (previous && next && !morett){
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
    const teminteiros = tudo.includes('inteiros')
    const teminteiro  = tudo.includes('inteiro')
  
    if (hasdecimal != null && !teminteiro && !teminteiros){
        SecondResult = resultado
        if (tudo.includes('centavos') || tudo.includes('centavo')){
          SecondResult = toMoeda(SecondResult)
        }
        if (tudo.includes('inteiro') || tudo.includes){
          total = FirstResult + SecondResult
        }
        total = ` ${FirstResult}.${SecondResult}`
        total = parseFloat(total)
    }
    else {
        total = resultado
    }
  
    //Caso o valor tem algo que indique que é BRL; adiciona R$ e limita o decimal para 2 casas 
    const temreais = tudo.includes('reais')
    const temreal  = tudo.includes('real')
    const temcentavos = tudo.includes('centavos')
    const temcentavo = tudo.includes('centavo')

  
    if(!temreais && !temreal && temcentavos || temcentavo){ 
        total = total/100
        total =  'R$ ' + parseFloat(total).toFixed(2)
    }
    if(temreais || temreal) total = 'R$ '+ parseFloat(total).toFixed(2)

    //Caso o valor possua decimo, centesimo ou milesimo; faça as divisões
    if(tudo.some(r => tempo.includes(r))){
        if ((tudo.includes('inteiro')) || (tudo.includes('inteiros'))){
            SecondResult = resultado
            total = SecondResult
        }
        if (array.some(r => tempodec.includes(r)))   {
          total = total / 10 
        }
        if (array.some(r => tempocen.includes(r)))   { 
          total = total / 100
        }
        if (array.some(r => tempomil.includes(r)))   {
          total = total / 1000
        }
        if ((tudo.includes('inteiro')) || (tudo.includes('inteiros'))){
            SecondResult = total
            total = FirstResult + SecondResult
        }
    }  
    //Caso possua algum indicador de negativo; multiplique p resultado por -1
    if (tudo.some(r => negativos.includes(r))) total = total * -1

    if (tudo.some(r => porcentagem.includes(r)) || temporcento){
      total = total / 100
    }
    //Replit não aceita valores maiores que 2^53, throw adicionado para parar a operação caso isso aconteça
    if (2**53 < total) throw new Error('Resultado não pode ser maior ou igual à 2^53')
  return total
}
module.exports = { string2number }