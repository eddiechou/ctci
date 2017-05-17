var assert = chai.assert;
var expect = chai.expect;

describe('[2.2] kthLast', function() {
  it('should remove duplicates from a linked list', function() {
    var head = new Node(1);
    var two = new Node(2);
    var three = new Node(3);
    var two2 = new Node(2);

    head.next = two;
    two.next = three;
    three.next = two2;
    expect(kthToLast(head, 1)).to.eql(two2);
  });
});