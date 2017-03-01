let query = function (n, data) {
  let sum = 0

  if (data.length === 7) {
    let x1 = parseInt(data[1], 10) - 1
    let y1 = parseInt(data[2], 10) - 1
    let z1 = parseInt(data[3], 10) - 1
    let x2 = parseInt(data[4], 10) - 1
    let y2 = parseInt(data[5], 10) - 1
    let z2 = parseInt(data[6], 10) - 1

    if (!isNaN(x1) && !isNaN(y1) && !isNaN(z1) &&
    !isNaN(x2) && !isNaN(y2) && !isNaN(z2)) {
      let i = x1

      for (; i < n; i++) {
        let j = y1

        if (i > x2) {
          break
        }
        for (; j < n; j++) {
          let k = z1

          if (i === x2 && j > y2) {
            break
          }
          for (; k < n; k++) {
            if (i === x2 && j === y2 && k > z2) {
              break
            }
            sum = sum + this.self[i][j][k]
          }
        }
      }
      return sum
    }
  } else {
    console.log(`Formato no valido Ejemplo: "query x1 y1 z1 x2 y2 z2"`)
    return false
  }
}

module.exports = query
