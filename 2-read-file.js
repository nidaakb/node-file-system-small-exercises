/**
 * Lee el fichero "test.txt" que acabas de crear y muestra su contenido por la consola
 */

const fs = require('fs');

const fileContent = fs.readFileSync("./test.txt","utf-8");
console.log(fileContent);