const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8889;
const GAME_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
    let filePath = path.join(GAME_DIR, req.url === '/' ? 'index.html' : req.url);
    
    // 安全检查：防止路径遍历
    if (!filePath.startsWith(GAME_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }
    
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Not Found');
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`🎮 游戏门户运行中: http://localhost:${PORT}/`);
    console.log(`🐍 贪吃蛇: http://localhost:${PORT}/games/game-001/`);
});
