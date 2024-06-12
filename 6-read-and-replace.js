/**
 * Crea una función que lea un fichero que remplaze todos los textos de un fichero. Se debe generar un nuevo fichero resultante de nombre "result.html" .
 * 
 * Resultado esperado tras la primera llamada a la función: https://oscarm.tinytake.com/msc/OTcyMDYyOV8yMzM1NjM3Mg
 * 
 * @param {string} htmlFilePath Ruta al fichero a modificar
 * @param {string} textToSearch Texto a buscar
 * @param {string} textToReplace Texto a reemplazar     
 */

const fs = require('fs');

function replaceTextInFile(htmlFilePath, textToSearch, textToReplace) {
    //1. READ THE HTML FILE AND WE SAVE ITS CONTENT WHICH IS A STRING TYPE IN THE VARIABLE - FILECONTENT
    const fileContent = fs.readFileSync(htmlFilePath,"utf-8");
    console.log(fileContent)
    // 2. REPLACE THE DATA IN THE HTML FILE
    const replaceContent = fileContent.replaceAll(textToSearch,textToReplace);
    console.log(replaceContent);
    // 3. GENERAMOS UN FICHERO CON EL RESULTADO DE LOS REPLACEMENTS
    fs.writeFile("result.html",replaceContent,"utf-8", (err) => {
        if (err) throw err; 
        else {
            console.log("File result.hmtl has been created correctly.");
        }
    })
}

replaceTextInFile("./index.html", "FFC371", "ADD8E6");
//replaceTextInFile("./index.html", "Aaron", "Caballero Oscuro");
//replaceTextInFile("./index.html", "El Horno de Leña", "La Pizzería Feliz");
