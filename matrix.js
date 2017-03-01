let query = require('./operations/query')
let update = require('./operations/update')

let create = (n) => {
  let aux1N = n

  for (; aux1N > 0; aux1N--) {
    let aux2N = n

    matrix.self.unshift([])
    for (; aux2N > 0; aux2N--) {
      let aux3N = n

      matrix.self[0].unshift([])
      for (; aux3N > 0; aux3N--) {
        matrix.self[0][0].unshift(0)
      }
    }
  }
}

let matrix = {
  self: [],
  query: query,
  update: update,
  create: create
}

module.exports = matrix
