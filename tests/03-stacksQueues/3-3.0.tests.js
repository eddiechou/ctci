var assert = chai.assert;
var expect = chai.expect;

describe('[3.0] Stack class', function() {
  it('should return popped value', function() {
    let stack = new Stack();
    stack.push(1);
    var val = stack.pop();
    expect(val).to.equal(1);
  });

  it('empty stack should return length of 0', function() {
    let stack = new Stack();
    expect(stack.getLength()).to.equal(0);
  })

  it('stack with one value pushed onto it should return length of 1', function() {
    let stack = new Stack();
    stack.push(1);
    expect(stack.getLength()).to.equal(1);
  })
});