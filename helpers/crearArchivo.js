const fs = require('fs');
const colors = require('colors');

let salida = ''; // guardar en archivo txt sin las marcas de colores
let consola = ''; // mostrar en consola con los colores 

const multiples = ( base, hasta = 10, inc = 1 ) => {
    salida += `${base} * ${inc} = ${base * inc}\n`;
    consola += colors.gray(`${colors.yellow(base)} * ${inc} = ${base * inc}\n`);

    if (hasta === 1) {
        return;
    }
    return (multiples(base, hasta - 1, inc + 1));
}

const getSalida = (base, hasta) => {
    return new Promise ( (resolve, reject) => {
        
        multiples(base, hasta);

        (salida)
        ? resolve ({salida, consola})
        : reject ('problema para obtener salida válida.')
    })
}


const crearArchivo = async (base = 5, lista = false, hasta = 10) => {

    try {
        const salida = await getSalida(base, hasta);
        
        if (lista === true) {
            console.log(colors.green('===================='));
            console.log(colors.green(`=== Tabla del ${colors.yellow(base)} ====`));
            console.log(colors.green('===================='));
            console.log(salida.consola);
        }

        fs.writeFile(`./salida/tabla-${base}.txt`, salida.salida, (err) => {
            if (err) throw err;
        });
        return colors.green(`tabla-${base}.txt`);
    } catch (err) {
        throw 'Error al crear archivo: ' + err;
    }
    
}

module.exports = {
    crearArchivo
}