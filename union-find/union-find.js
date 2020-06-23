function union(node1, node2) {
  let root1 = find(node1);
  let root2 = find(node2);

  if (root1 == root2) return;

  if (componentSize[root1] < componentSize[root2]) {
    // Merge component of root1 into component of root2
    componentSize[root2] += componentSize[root1];
    // Set root2 as parent of component of root1
    parents[root1] = root2;
  } else {
    componentSize[root1] += componentSize[root2];
    parents[root2] = root1;
  }
}

function find() {
  let root = node;
  // Reach the absolute root
  while(root != node) root = parents[node];

  // Path compression
  while(root != node) {
    let parent = parents[node];
    parents[node] = root;
    node = parent
  }

  return root;
}
