var http = require('http');
var fs = require('fs');
var url = require('url')
var q

http.createServer(function (req, res) {

  q = url.parse(req.url,true)
  console.log(q.host,q.port)

  fs.readFile('demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080)
