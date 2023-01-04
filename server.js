const http = require('http')
const server = http.createServer((req, res) => {
  res.end(`<body>
                  <p>Pague o aluguel!<p/>
                  <img src='pague-o-aluguel.gif' alt='Rica Pancita'>
                </body>`)
})
server.listen(3000)