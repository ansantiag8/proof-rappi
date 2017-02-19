let n = 3
let aux1N = n
let matrix = []
// let matrix = [[[0]], [[0]], [[0]]]

for (; aux1N >= 0; aux1N--) {
  let aux2N = n

  matrix.unshift([])
  for (; aux2N >= 0; aux2N--) {
    let aux3N = n

    matrix[0].unshift([])
    for (; aux3N >= 0; aux3N--) {
      matrix[0][0].unshift(`${aux1N}-${aux2N}-${aux3N}`)
    }
  }
}

// 1:update x y z W
// 2:query x1 y1 z1 x1 y1 z1
// let cases =
console.log(matrix)
console.log(matrix[0])
console.log(matrix[0][0])
console.log(matrix[0][0][0])

console.log(matrix[1])
console.log(matrix[1][1])
console.log(matrix[1][3][0])
