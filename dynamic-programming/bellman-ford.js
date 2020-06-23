// Bellman Ford uses Dynamic Programming
// Time Complexity: O(VE) or O(V(V-1)) or O(V^2)
// Space Complexity: O(V+E)
/*
Start from bottom up by calculating shortest path for each edge with 1 length.
Then do same for 2 length, then 3 length until V-1 length.

Steps to perform:
- Relax edges V - 1 times
- Check for negative weight cycle
*/

// Sample Graph as edges:
// [u, v, w]
// [0, 1, -1]
// [0, 2, 4]
// [1, 2, 3]
// [1, 3, 2]
// [1, 4, 2]
// [3, 2, 5]
// [3, 1, 1]
// [4, 3, -3]
function bellmanFord(src, graph, vertices) {
  let distance = Array(vertices).fill(Number.MAX_SAFE_INTEGER);

  distance[src] = 0;
  // Relax edges V-1 times
  // O(VE)
  for (let v = 0; v < vertices.length - 1; v++) {
    for (let edge in graph) {
      let u = graph[edge][0];
      let v = graph[edge][1];
      let w = graph[edge][2];

      if (distance[u] != Number.MAX_SAFE_INTEGER && distance[v] > distance[u] + w) {
        distance[v] = distance[u] + w;
      }
    }
  }

  // Check for negative weight cycle
  // If the distance reduces in this iteration
  // as well then graph has negative weight cycle
  // O(E)
  for (let edge in graph) {
    let u = graph[edge][0];
    let v = graph[edge][1];
    let w = graph[edge][2];

    if (distance[u] != Number.MAX_SAFE_INTEGER && distance[v] > distance[u] + w) {
      console.log('Negative weight cycle found');
      return [];
    }
  }

  return distance;
}

// Using Adjacency Matrix - 4 nodes graph
// [INF 1  2   3]
// [1   9  10  INF]
// [INF 1  INF 2]
// [INF 11 2   INF]

// Time Complexity: O(EV^2) or O(V^3)
// Space Complexiy: O(V+E)
function bellmanFord(src, matrix) {
  let distance = Array(matrix.length);

  distance[src] = 0;
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let u = 0; u < matrix.length; u++) {
      for (let v = 0; v < matrix.length; v++) {
        if (distance[u] != Number.MAX_SAFE_INTEGER && distance[v] > distance[u] + matrix[u][v]) {
          distance[v] = distance[u] + matrix[u][v];
        }
      }
    }
  }

  for (let u = 0; u < matrix.length; u++) {
    for (let v = 0; v < matrix.length; v++) {
      if (distance[u] != Number.MAX_SAFE_INTEGER && distance[v] > distance[u] + matrix[u][v]) {
        console.log('Negative weight cycle found');
        return [];
      }
    }
  }

  return distance;
}
