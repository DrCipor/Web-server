const http = require('http');

const server = http.createServer((req, resp) => {

    

    resp.write('Hola mundo');
    resp.end()
});

server.listen(8080, () => {
    console.log('Escuchando el puerto 8080')
});

