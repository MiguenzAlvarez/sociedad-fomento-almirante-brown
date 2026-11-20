import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = join(process.cwd(), 'dist');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml'};
createServer(async (req,res)=>{
  try {
    const raw = decodeURIComponent((req.url || '/').split('?')[0]);
    const relative = raw === '/' ? 'index.html' : raw.replace(/^\/+/, '');
    const file = normalize(join(root, relative));
    if (!file.startsWith(root)) throw new Error('Invalid path');
    const info = await stat(file);
    const target = info.isDirectory() ? join(file, 'index.html') : file;
    res.writeHead(200, {'Content-Type': types[extname(target)] || 'application/octet-stream'});
    res.end(await readFile(target));
  } catch {
    res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});
    res.end('No encontrado');
  }
}).listen(4173, '127.0.0.1', ()=>console.log('http://127.0.0.1:4173'));
