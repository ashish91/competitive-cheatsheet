// graph = [[1,2],[2,3],[5],[0],[5],[],[]] with nodes 0..6
// DFS with coloring
function isBipartite(graph) {
  let color = {};

  for (let node = 0; node < graph.length; node++) {
    // Skip node if already colored
    if (color[node]) {
      continue;
    }

    let stack = [node];
    color[node] = 0;

    while (stack.length > 0) {
      let current = stack.pop();

      let neighbours = graph[current];
      for (let index = 0; index < neighbours.length; index++) {
        if (!color[neighbours[index]]) {
          stack.push(neighbours[index]);
          color[neighbours[index]] = color[current] ^ 1;
        } else if (color[neighbours[index]] == color[current]) {
          return false
        }
      }
    }
  }

  return true;
}

// BFS with coloring
function isBipartite(graph) {
  let color = {};

  for (let node = 0; node < graph.length; node++) {
    // Skip node if already colored
    if (color[node]) {
      continue;
    }

    let queue = [node];
    color[node] = 1;

    while (queue.length > 0) {
      let current = queue.shift();

      let neighbours = graph[current];
      for (let index = 0; index < neighbours.length; index++) {
        if (!color[neighbours[index]]) {
          queue.push(neighbours[index]);
          color[neighbours[index]] = 1 - color[current];
        } else if (color[neighbours[index]] == color[current]) {
          return false
        }
      }
    }
  }

  return true;
}
