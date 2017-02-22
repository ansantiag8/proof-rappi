const readline = require('readline')

let t = 1 // ejecuciones del ejercicio
let n = 3
let m = 2 // numero de operaciones
let aux1N = n
let matrix = []

let makeMatrix = () => {
  for (; aux1N > 0; aux1N--) {
    let aux2N = n

    matrix.unshift([])
    for (; aux2N > 0; aux2N--) {
      let aux3N = n

      matrix[0].unshift([])
      for (; aux3N > 0; aux3N--) {
        matrix[0][0].unshift(0)
        // matrix[0][0].unshift(`${aux1N}-${aux2N}-${aux3N}`)
      }
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let readT = () => {
  rl.question('T: ', (answer) => {
    t = parseInt(answer, 10)

    if (isNaN(t)) {
      console.log(`Digite un número por favor`)
      readT()
    } else {
      if (t >= 1 && t <= 50) {
        // console.log(`${t}`)
        readNM()
      } else {
        console.log(`Debes ingresar un número entre 1 y 50`)
        readT()
      }
      readT()
    }

    // rl.close()
  })
}

let readNM = () => {
  rl.question('N M: ', (answer) => {
    let aux = answer.split(' ')
    n = parseInt(aux[0], 10)
    m = parseInt(aux[1], 10)

    if (!isNaN(n) && !isNaN(m)) {
      if ((n >= 1 && n <= 100) && (m >= 1 && m <= 1000)) {
        makeMatrix()
        readO()
      } else {
        console.log(`La n debe estar entre 1 y 100 y la m entre 1 y 1000`)
        readNM()
      }
    } else {
      console.log(`Digite un número espacio otro número favor`)
      readNM()
    }
  })
}

let readO = () => {
  rl.question('Transacción: ', (answer) => {
    let data = answer.split(' ')
    let operation = data[0].toLowerCase()

    switch (operation) {
      case 'update':
        if (data.length === 5) {
          let x = parseInt(data[1], 10) - 1
          let y = parseInt(data[2], 10) - 1
          let z = parseInt(data[3], 10) - 1
          let w = parseInt(data[4], 10)

          if (!isNaN(x) &&
          !isNaN(y) &&
          !isNaN(z) &&
          !isNaN(w)) {
            if (x <= n && y <= n && z <= n) {
              matrix[x][y][z] = w
            } else {
              console.log(`los tres primeros numeros deben de ser menor a n "${n}"`)
              readO()
            }
          } else {
            console.log(`los datos que ingresaste despues del "${operation}" no son todos numeros, verifica por favor`)
            readO()
          }
        } else {
          console.log(`Formato no valido Ejemplo: "query x1 y1 z1 W"`)
          readO()
        }
        break
      case 'query':

        break
      default:
        console.log(`La operación "${data[0]}" no es reconocida`)
        readO()
    }
  })
}

readT()

//
//
// for (; t >= 0; t--) {
//   for (; m >= 0; m--) {
//   }
// }
//
// // 1:update x y z W
// // 2:query x1 y1 z1 x1 y1 z1
// // let cases =
