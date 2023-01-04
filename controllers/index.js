const home = (req, res) => {
  res.render('home', {
    time: new Date().getTime(),
    lista: ['Cravinhos', 'Ribeirão Preto', 'Serra Azul'],
    animais: [
      { nome: 'Lurdinha' },
      { nome: 'Geiza' },
      { nome: 'Teodora' },
      { nome: 'Diana' },
      { nome: 'Elton John' },
      { nome: 'Merida' }
    ]
  })
}

const pagina1 = (req, res) => {
  res.send('Fullstack Master')
}

const calc = (req, res) => {
  console.log(req.query)
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query
    const soma = parseFloat(num1) + parseFloat(num2)
    res.render('calc', { soma })
  }
  res.send('Calculadora')
}

const par = (req, res) => {
  const isPar = (req.params.num % 2) === 0
  if (isPar) {
    res.send('Número é par')
  } else {
    res.send('Número é ímpar')
  }

}

module.exports = {
  home, pagina1, calc, par
}