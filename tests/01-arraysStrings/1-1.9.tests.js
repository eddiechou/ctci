var assert = chai.assert;
var expect = chai.expect;

describe('[1.9] isRotation', function() {
  it('should return true if s1 and s2 are the same', function() {
    var s1 = 'hello';
    var s2 = 'hello';
    expect(isRotation(s1, s2)).to.be.true;
  });

  it('should return true if s2 is a rotation of s1', function() {
    var s1 = 'hello';
    var s2 = 'llohe';
    expect(isRotation(s1, s2)).to.be.true;
  });

  it('should return false if s2 is not a rotation of s1', function() {
    var s1 = 'hello';
    var s2 = 'elohl';
    expect(isRotation(s1, s2)).to.be.false;
  });
});