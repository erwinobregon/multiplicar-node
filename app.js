const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo.blue}`))
            .catch((err) => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}

// console.log(argv.base);
// console.log(argv.limite);


//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];