const head1 = [];
const head2 = [1, 2, 3, 4, 5];
const head3 = [1, 2];
const head4 = [1];

const removeNthNodeFromEndOfList = (head, nthNode) => {
  if (head.length === 0) {
    console.log("head is empty");
    return;
  }

  let remainingHead = head.filter((item) => item !== head[nthNode]);

  if (head[nthNode] !== undefined) {
    return console.log(remainingHead);
  } else {
    return console.log([]);
  }
};

removeNthNodeFromEndOfList(head1, 1);
removeNthNodeFromEndOfList(head2, 1);
removeNthNodeFromEndOfList(head3, 1);
removeNthNodeFromEndOfList(head4, 9);
