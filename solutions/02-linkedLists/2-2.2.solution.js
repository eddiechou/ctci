// [2.2] kthToLast

// Algorithm to find the kth to last element of a singly linked list


// Recursive version (TODO)
function kthLast(head, k) {
  if (head === null) {
    return 0;
  }

  var index = kthLast(head.next) + 1;

  if (index === k) {
    console.log(k + 'th to last node is ' + head.val);
  }

  return index;
}


// Iterative version (assumes that LL.length > k)
// Runtime: O(n), space: O(1)
function kthToLast(head, k) {
  let p = head;
  let q = head;
  // move q ahead by k
  for (let i = 0; i < k; i++) {
    q = q.next;
  }
  // move p and q forward until q hits null
  while (q !== null) {
    q = q.next;
    p = p.next;
  }

  return p;
}