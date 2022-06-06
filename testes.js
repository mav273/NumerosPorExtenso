const { string2number } = require('./STN_for-normal-simplificado')
const string = process.argv[2];
//Exemplo: node testes.js 'um' 

try{
string2number(string);
}
catch(e){
    console.error(e)
}