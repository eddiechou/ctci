// Rotate Matrix: Rotate NxN matrix by 90 degrees

// Rotates matrix in place

function rotateMatrix(matrix) {
  var n = matrix[0].length;
  // for each layer
  for (let layer = 0; layer < n / 2; layer++) {

    var first = layer;
    var last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      var offset = i - first;
      // save top
      var top = matrix[first][i];
      // left -> top
      matrix[first][i] = matrix[last - offset][first];
      // bot -> left
      matrix[last - offset][first] = matrix[last][last - offset];
      // right -> bot
      matrix[last][last - offset] = matrix[i][last]
      // set right as top
      matrix[i][last] = top;
    }
  } 
}
