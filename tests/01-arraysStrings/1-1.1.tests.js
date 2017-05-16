var assert = chai.assert;
var expect = chai.expect;

describe('[1.1] isUnique', function() {
  it('should return true for string with all unique characters', function() {
    expect(isUnique('world')).to.be.true;
  });

  it('should return false for string with all repeated characters', function() {
    expect(isUnique('hello')).to.be.false;
  });

  it('should return true for empty string', function() {
    expect(isUnique('')).to.be.true;
  });
});

describe('[1.1] isUniqueSlow', function() {
  it('should return true for string with all unique characters', function() {
    expect(isUniqueSlow('world')).to.be.true;
  });

  it('should return false for string with all repeated characters', function() {
    expect(isUniqueSlow('hello')).to.be.false;
  });

  it('should return true for empty string', function() {
    expect(isUnique('')).to.be.true;
  });
});