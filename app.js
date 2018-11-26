
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');



let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];

switch(comando){

    case 'listar':
    listarTabla(base,limite);
    break;

    case 'crear':
        crearArchivo(base,limite).then((archivo) => {
            console.log(`archivo creado ${archivo.green}`);
        }).catch((error) =>{
            console.log(`error con el programa. ${error}`);
        })
      break;

    default:
      console.log("comando no reconocido");
}
