var assert = chai.assert;
var expect = chai.expect;

describe('checkPermutation', function() {
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