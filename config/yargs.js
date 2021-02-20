const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Es la base de la tabla de multiplicar.'
    })
    .option('l', {
        alias: 'lista',
        type: 'boolean',
        demandOption: false,
        default: false,
        description: 'Muestra la tabla de multiplicar en consola.'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        description: 'Indica cuántos múltiplos de la base quieres obtener desde el 1 hasta el que indiques (10 por defecto).'
    })
    .check( (argv, options) => {
        if ( isNaN(argv.b) ) {
            throw 'la base tiene que ser un número'
        }
        return true;
    })
    .argv;

    module.exports = {
        argv
    }