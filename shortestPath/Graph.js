class Graph {
  constructor(graph) {
    this.vertices = graph.vertices;
    this.adjacencyList = graph.adjList;
  }

  showgraph() {
    let vertices = this.vertices
    let adjacencyList = this.adjacencyList
    return { vertices, adjacencyList }
  }

  dijkstra(source, to) {
    let distances = {}
    let verticePathFrom = {}
    let isVisited = {}

    // Inisiasi awal
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i] === source) {
        distances[this.vertices[i]] = 0
      } else {
        distances[this.vertices[i]] = Infinity
      }
      verticePathFrom[this.vertices[i]] = this.vertices[i]
      isVisited[this.vertices[i]] = false
    }

    let currVisited = source //Inisiasi mulai

    while (currVisited !== null) {
      let distance = distances[currVisited]
      let edges = this.adjacencyList[currVisited]
      for (const key in edges) {
        console.log(key, 'Cek Distance')
        let newDistance = distance + edges[key]
        if (newDistance < distances[key]) {
          distances[key] = newDistance
          verticePathFrom[key] = currVisited
        }
      }
      isVisited[currVisited] = true

      // Mencari vertice yang belum dikunjungi dan mempunyai distance paling kecil
      let minDistance = Infinity // Initialvalue
      let currVertice = null //Initialvalue
      for (const key in distances) {
        console.log('Search currVisited')
        if (distances[key] < minDistance && isVisited[key] !== true) {
          minDistance = distances[key]
          currVertice = key
        }
      }

      currVisited = currVertice
      // console.log('Happy Loopinggg,...')
    }

    console.log(distances)
    console.log(verticePathFrom)
    console.log(isVisited)
    return `${distances[to]} from path ${verticePathFrom[to]}`
  }
}

module.exports = Graph