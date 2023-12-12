const { LinkedList } = require('./linked-list');

function findMiddle(list) {
  let slow = list.head;
  let fast = list.head;
  let prev = null;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }
  if (fast === null) {
    return prev.next;
  } else {
    return slow;
  }
}
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log(findMiddle(list));
