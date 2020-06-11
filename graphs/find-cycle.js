// graph = [[1,2],[2,3],[5],[0],[5],[],[]] with nodes 0..6
// colors: WHITE 0, GRAY 1, BLACK 2;
// DFS with coloring
function findCycle(node, graph, color) {
  // Node has been seen
  color[node] = 1;

  let neighbours = graph[node];
  for (let i = 0; i < neighbours.length; i++) {
    // Node was visted so skip
    if (color[neighbours[i]] == 2) {
      continue;
    }
    // Either neighbour was seen before or cycle already found
    if(color[neighbours[i]] == 1 || findCycle(neighbours[i], graph, visited)) {
      return true;
    }
  }

  // Node has been visited
  color[node] = 2;
  return false;
}
