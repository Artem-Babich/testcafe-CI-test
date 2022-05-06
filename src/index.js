import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 8500;
const HOST = 'localhost';

const requestListener = function (req, res) {
    const contents = fs.readFileSync(__dirname + '/pages/index.html');

    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(contents.toString());
}

const server = http.createServer(requestListener);
server.listen(PORT, HOST, function () {
    console.log(`Server is running on http://${ HOST }:${ PORT }`);
})
