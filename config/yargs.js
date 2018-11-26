const opciones ={
    base:{
        demand:true,
        alias:'b',
        default:7
    },
    limite:{
        alias:'l',
        default:10
    }
}

const argv = require('yargs')
.command('listar','Imprime en la consola la tabla de multiplicar', opciones)
.command('crear','Genera un archivo con la tabla de multiplicar',opciones)
.help()
.argv;

module.exports = {
    argv
}