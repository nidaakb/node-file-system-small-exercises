/**
 * Borra el fichero 'borrame.txt' situado en este mismo directorio
 */

const fs = require('fs');

fs.unlink('borrame.txt', function (err) {
    if(err) throw err;
    console.log("File deleted!")
})