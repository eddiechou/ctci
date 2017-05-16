var assert = chai.assert;
var expect = chai.expect;

describe('[1.2] checkPermutation', function() {
  it('should return true for 2 strings where 1 is a permutation of another', function() {
    expect(isPermutation('abab', 'baba')).to.be.true;
  });

  it('should return false for 2 strings where 1 is not a permutation of another', function() {
    expect(isPermutation('hello', 'hella')).to.be.false;
  });

  it('should return false for 2 strings that are of differing lengths', function() {
    expect(isPermutation('aaa', 'aa')).to.be.false;
  })
});

describe('[1.2 helper] getLetterCounts', function() {
  it('should return the character counts for a string that has length', function() {
    expect(getLetterCounts('abab')).to.eql({a: 2, b: 2});
  });

  it('should return an empty object for an empty string', function() {
    expect(getLetterCounts('')).to.eql({});
  });
});