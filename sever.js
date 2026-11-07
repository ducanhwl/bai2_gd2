const http = require('http');

const PORT = 3000;

// ⚠️ Thay bằng thông tin thật của bạn
const student = {
  name: 'Nguyễn Văn A',
  id: '20210001'
};

const server = http.createServer((req, res) => {
  // Route "/" trả về trang HTML thông tin sinh viên
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Thông tin sinh viên - Bài 2</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      min-height: 100vh;
      display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #667eea, #764ba2);
    }
    .card {
      background: #fff;
      padding: 48px 64px;
      border-radius: 16px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.25);
      text-align: center;
      max-width: 480px;
    }
    h1 { color: #000000; margin-bottom: 24px; font-size: 26px; }
    .row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed #e5e7eb; }
    .row:last-child { border-bottom: none; }
    .label { color: #6b7280; font-weight: 500; }
    .value { color: #111827; font-weight: 700; font-size: 18px; }
    .badge { margin-top: 24px; display: inline-block; padding: 6px 14px; border-radius: 999px; background: #eef2ff; color: #4338ca; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Thông tin sinh viên</h1>
    <div class="row"><span class="label">Họ tên</span><span class="value">${student.name}</span></div>
    <div class="row"><span class="label">Mã sinh viên</span><span class="value">${student.id}</span></div>
    <div class="badge">Served by bai2 · Node.js http module</div>
  </div>
</body>
</html>`);
    return;
  }

  // Các route khác → 404
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>404 - Không tìm thấy trang</h1>');
});

server.listen(PORT, () => {
  console.log(` Server đang chạy tại: http://localhost:${PORT}`);
});