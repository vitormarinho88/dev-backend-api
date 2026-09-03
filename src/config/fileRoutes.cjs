const { resolve } = require('node:path');
const express = require('express');

const uploadPath = resolve(__dirname, '..','..', 'uploads');

const fileRouteConfig = express.static(uploadPath);

module.exports = fileRouteConfig;



/*
Repare que o arquivo é .cjs (CommonJS, usando module.exports) 
sendo importado num projeto que usa import/export (ESM). 
Isso funciona normalmente em Node moderno — o 
ESM loader consegue importar um .cjs via interop —, 
mas só se a extensão .cjs estiver explícita no caminho do import, como fiz acima. 
Se você tentasse from './config/fileRoutes.js' sem a extensão certa, quebraria de novo.
*/