const readline = require('readline')

let t = 1 // ejecuciones del ejercicio
let n = 3
let m = 2 // numero de operaciones
// let aux1N = n
// let matrix = []
// // let matrix = [[[0]], [[0]], [[0]]]

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
        // console.log(`${n} - ${m}`)
        readO()
      } else {
        console.log(`La n debe estar entre 1 y 100 y la m entre 1 y 1000`)
        readNM()
      }
    } else {
      console.log(`Digite un número espacio otro número favor`)
      readNM()
    }

    // rl.close()
  })
}

let readO = () => {
  // for (; t >= 0; t--) {
  for (; m > 0; m--) {
    console.log(`preguntara por las transacciones a realizar`)
  }
  // }
}

readT()

//
//
// for (; t >= 0; t--) {
//   for (; aux1N >= 0; aux1N--) {
//     let aux2N = n
//
//     matrix.unshift([])
//     for (; aux2N >= 0; aux2N--) {
//       let aux3N = n
//
//       matrix[0].unshift([])
//       for (; aux3N >= 0; aux3N--) {
//         matrix[0][0].unshift(0)
//         // matrix[0][0].unshift(`${aux1N}-${aux2N}-${aux3N}`)
//       }
//     }
//   }
//   for (; m >= 0; m--) {
//   }
// }
//
// // 1:update x y z W
// // 2:query x1 y1 z1 x1 y1 z1
// // let cases =
