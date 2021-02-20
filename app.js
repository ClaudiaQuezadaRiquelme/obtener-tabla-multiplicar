const { crearArchivo } = require('./helpers/crearArchivo');
const { argv } = require('./config/yargs');
const colors = require('colors');

console.clear();

// node app -b 6
// node app --base 6
// node app -b 6 -l
// node app --base 6 -lista
// node app -b 6 -l -h
// node app --base 6 -lista -hasta

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(colors.gray(`Archivo ${nombreArchivo} creado.`)) )
    .catch( err => console.log(err) );