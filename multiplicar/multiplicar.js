const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('============================='.green);
    console.log(`===== tabla de ${base} ======`.red);
    console.log('============================='.green);

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} = ${i * base}\n `;

    }
    console.log(data);
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es nuevo numero `);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${i*base }\n`;

        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite }.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}