
const indexes =  [ 
  [ 2, 3 ],
  [ 4, 5 ],
  [ 6, -1 ],
  [ -1, 7 ],
  [ 8, 9 ],
  [ 10, 11 ],
  [ 12, 13 ],
  [ -1, 14 ],
  [ -1, -1 ],
  [ 15, -1 ],
  [ 16, 17 ],
  [ -1, -1 ],
  [ -1, -1 ],
  [ -1, -1 ],
  [ -1, -1 ],
  [ -1, -1 ],
  [ -1, -1 ] ]
const queries =  [ 2, 3 ]

// console.log(swapNodes(indexes, queries))


function createNode(nodeDataArray, nodeIndex) {
  if (nodeIndex <= 0) {
    return undefined;
  }

  return {
    index: nodeIndex,
    left: createNode(nodeDataArray, nodeDataArray[nodeIndex-1][0]),
    right: createNode(nodeDataArray, nodeDataArray[nodeIndex-1][1]),
  }
}

function swap(node, currentLevel, swapLevel) {
  if (!node) {
    return;
  }


// console.log("currentLevel: " + currentLevel + "  swapLevel" + swapLevel);


  if ((currentLevel % swapLevel) == 0) {
    var tmp = node.right;
    node.right = node.left;
    node.left = tmp;
  }

  swap(node.left, currentLevel+1, swapLevel);
  swap(node.right, currentLevel+1, swapLevel);
}

function traverse(node) {
  if (!node) {
    return "";
  }

  var result = "";
  result += traverse(node.left);
  result += node.index + " ";
  result += traverse(node.right);
  return result;
}

function solution(data) {
  var lines = data.trim().split('\n');
  var numNodes = parseInt(lines[0]);
  var nodeDataArray = [];
  for (var i=0; i<numNodes; ++i) {
    var nodeLines = lines[1+i].split(' ');
    nodeDataArray.push([parseInt(nodeLines[0]), parseInt(nodeLines[1])]);
  }
  var numSwaps = parseInt(lines[1+numNodes]);
  var swapArray = [];
  for (var i=0; i<numSwaps; ++i) {
    swapArray.push(parseInt(lines[1+numNodes+1+i]));
  }

  // console.log('numNodes: ' + numNodes);
  // console.log(nodeDataArray);
  // console.log('numSwaps: ' + numSwaps);
  // console.log(swapArray);

  var rootNode = createNode(nodeDataArray, 1);
  // console.log(rootNode);

  swapArray.forEach(function(swapLevel) {
// console.log(rootNode);
    swap(rootNode, 1, swapLevel);
// console.log(rootNode);
    console.log(traverse(rootNode));
  });
}

console.log(createNode(indexes, 11))