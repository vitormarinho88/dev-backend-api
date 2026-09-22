const  multer  = require('multer');
const {resolve} = require('node:path');
const {v4} = require('uuid');

module.exports = {
    storage: multer.diskStorage({
        destination: resolve(__dirname,'..','..','uploads'),
        filename: (_request , file , callback) => {
            const uniqueName = v4().concat(`-${file.originalname}`);
            return callback(null, uniqueName);
        },
    }),
};



/*

const multer = require('multer'); 
-> Importa a biblioteca multer, um middleware para 
Node.js/Express usado para lidar com 
multipart/form-data, ou seja, 
upload de arquivos 
(imagens, PDFs, etc.) enviados via formulário.



const {resolve} = require('node:path');
->Importa a função resolve do módulo nativo path do Node.js. 
Ela monta um caminho absoluto a partir de partes relativas — 
útil para não depender de onde o script é executado.



const {v4} = require('uuid');
->Aqui está sua dúvida: sim, uuid é uma biblioteca 
(precisa ser instalada via npm install uuid). Ela gera UUIDs 
(Universally Unique Identifiers) — identificadores 
únicos universais, tipo: 110ec58a-a0f2-4ac4-8393-c866d813b8d1

*/