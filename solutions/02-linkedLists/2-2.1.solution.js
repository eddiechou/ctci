// [2.1] removeDups from linkedList

// You can check each node in the linked list and remove all duplicates for that value
// Runtime: O(n^2)

// Alternative: Maintain a buffer of values we've seen (hash)
// Iterate through the linkedList and if we've seen it before, remove it
// Runtime: O(n), space: O(n)
function removeDups(head) {
  if (head === null) {
    return null;
  }
  let seenBefore = {};
  seenBefore[head.val] = true;
  // Don't need to check first value
  let p = head.next;
  let q = head;

  while (p !== null) {
    if (seenBefore.hasOwnProperty(p.val)) {
      // remove the node
      q.next = p.next;
    }
    seenBefore[p.val] = true;
    q = p;
    p = p.next;
  }
}