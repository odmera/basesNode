const fs = require('fs');
var colors = require('colors');

 function crearArchivo(base,limit=10){
  return  new Promise((resolve,reject) =>{
        if(!Number(base)){
            reject("No es un numero.")
            return;
        }

        let data = '';
        for (let index = 1; index <= limit; index++) {
            data += `${base} * ${index} = ${base * index}\n` ; 
        }
        fs.writeFile(`salidadatos/tabla-${base}-al-${limit}.txt`, data, (err) => {

            if(err){
              reject(err);
            }
            else{
                resolve(`tabla-${base}-al-${limit}.txt`);
            }
        });
    });
}

function listarTabla(base,limit=10){

    console.log("==============================".green);
    console.log(`tabla-${base}-al-${limit}`.green);
    console.log("==============================".green);

    for (let index = 1; index <= limit; index++) {
        console.log(`${base} * ${index} = ${base * index}\n` );
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}

