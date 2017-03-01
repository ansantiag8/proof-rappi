let update = function (n, data) {
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
        this.self[x][y][z] = w
      } else {
        console.log(`los tres primeros numeros deben de ser menor a n "${n}"`)
        return false
      }
    } else {
      console.log(`los datos que ingresaste despues del "${data[0].toLowerCase()}" no son todos numeros, verifica por favor`)
      return false
    }
  } else {
    console.log(`Formato no valido Ejemplo: "update x1 y1 z1 W"`)
    return false
  }
}

module.exports = update
