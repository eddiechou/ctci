var assert = chai.assert;
var expect = chai.expect;

describe('[1.7] rotateMatrix', function() {
  it('should not change a 1x1 matrix', function() {
    var matrix = [[1]];
    var rotMatrix = [[1]];
    rotateMatrix(matrix);
    expect((matrix)).to.eql(matrix);
  });
  it('should rotate an 4x4 matrix by 90 degrees', function() {
    var matrix = [
      [ 0, 1, 2, 3],
      [ 4, 5, 6, 7],
      [ 8, 9,10,11],
      [12,13,14,15]];

    var rotMatrix = [
      [12, 8, 4, 0],
      [13, 9, 5, 1],
      [14,10, 6, 2],
      [15,11, 7, 3]];
    rotateMatrix(matrix);
    expect(matrix).to.eql(rotMatrix);
  });
});