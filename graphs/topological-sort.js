// graph = [[1,2],[2,3],[5],[0],[5],[],[]] with nodes 0..6
function dfs(node, visited, graph, sorted) {
  if (visited[node]) return;

  visited[node] = true;

  let neighbours = graph[node];
  for (let i = 0; i < neighbours.length; i++) {
    if (!visited[neighbours[i]]) {
      dfs(node, visited, graph, sorted);
    }
  }

  sorted.push(node);
}

function topologicalSort(graph) {
  let visited = {}, sorted = [];

  for (let v = 0; v < graph.length; v++) {
    if (!visited[v]) {
      dfs(v, visited, graph, sorted);
    }
  }

  return sorted;
}
