const Graph = require('./Graph')

let data = {
  vertices: [
    'A', 'B', 'C',
    'D', 'E', 'F',
    'G'
  ],
  adjList: {
    A: { B: 16, C: 22, D: 25 },
    B: { A: 16, D: 14, E: 26 },
    C: { A: 22, D: 9, G: 35 },
    D: { A: 25, B: 14, C: 9, F: 24 },
    E: { B: 26, F: 15, G: 28 },
    F: { D: 24, E: 15, G: 8 },
    G: { C: 35, E: 28, F: 8 }
  }
}

let g = new Graph(data)
let result = g.dijkstra('A', 'G')
console.log(result)