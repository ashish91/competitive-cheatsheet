// Single Source shortest path - Dijkstra Algorithm
// Using Adjacency Matrix
function dijkstra(graph, source) {
  // stores distance from source to that node
  let distance = Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
  // boolean array to store visited nodes
  let visited = Array(graph.length).fill(false);

  distance[source] = 0;

  for (let vertex = 0; vertex < N; vertex++) {
    let minVertex = findMinimumVertex(graph.length, visited, distance);
    visited[minVertex] = true;

    for (let neighbour = 0; neighbour < graph.length; neighbour++) {
      if (!visited[neighbours[j]] && graph[minVertex][neighbour] && distance[minVertex] + graph[minVertex][neighbour] < distance[neighbour]) {
        distance[neighbour] = distance[minVertex] + graph[minVertex][neighbour];
      }
    }
  }

  return distance;
}

function findMinimumVertex(N, visited, distance) {
  let minDistance = Number.MAX_SAFE_INTEGER, minVertex = 0;
  for (let vertex = 0; vertex < N; vertex++) {
    if (!visited[vertex] && minDistance > distance[vertex]) {
      minVertex = vertex;
      minDistance = distance[vertex];
    }
  }

  return minVertex;
}
