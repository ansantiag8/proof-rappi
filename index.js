var readlineSync = require('readline-sync')

let matrix = require('./matrix')
// let query = require('./operations/query')
// let update = require('./operations/update')

let t = 0
let n = 0
let m = 0

let readT = () => {
  t = readlineSync.question('T: ')
  t = parseInt(t, 10)

  if (isNaN(t)) {
    console.log(`Digite un número por favor`)
    readT()
  } else {
    if (t >= 1 && t <= 50) {
      let i = t - 1

      for (; i >= 0; i--) {
        readNM()
      }
    } else {
      console.log(`Debes ingresar un número entre 1 y 50`)
      readT()
    }
  }
}

let readNM = () => {
  let nM = readlineSync.question('N M: ')
  nM = nM.split(' ')
  n = parseInt(nM[0], 10)
  m = parseInt(nM[1], 10)

  if (!isNaN(n) && !isNaN(m)) {
    if ((n >= 1 && n <= 100) && (m >= 1 && m <= 1000)) {
      let i = m - 1

      matrix.create(n)

      for (; i >= 0; i--) {
        readO()
      }
    } else {
      console.log(`La n debe estar entre 1 y 100 y la m entre 1 y 1000`)
      readNM()
    }
  } else {
    console.log(`Digite un número espacio otro número favor`)
    readNM()
  }
}

let readO = () => {
  let data = readlineSync.question('Operation: ')
  data = data.split(' ')
  let operation = data[0].toLowerCase()

  switch (operation) {
    case 'update':
      if (matrix.update(n, data) === false) {
        readO()
      }
      break
    case 'query':
      let aux = matrix.query(n, data)
      if (aux === false) {
        readO()
      } else {
        console.log(aux)
      }

      break
    default:
      console.log(`La operación "${data[0]}" no es reconocida`)
      readO()
  }
}

readT()
