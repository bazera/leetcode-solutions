class MyLinkedList {
  head;

  getNode(index) {
    let count = 0;
    let node = this.head;

    while (node && count < index) {
      node = node.next;
      count++;
    }

    return node;
  }

  get(index) {
    const node = this.getNode(index);
    return node ? node.val : -1;
  }

  addAtHead(val) {
    if (!this.head) {
      this.head = {
        val,
        next: null,
      };
      return;
    }

    this.head = {
      val,
      next: this.head,
    };
  }

  addAtTail(val) {
    if (!this.head) {
      this.head = {
        val,
        next: null,
      };
      return;
    }

    let node = this.head;

    while (node && node.next) {
      node = node.next;
    }

    node.next = {
      val,
      next: null,
    };
  }

  getLength() {
    let count = 0;
    let node = this.head;

    while (node) {
      node = node.next;
      count++;
    }

    return count;
  }

  addAtIndex(index, val) {
    const length = this.getLength();

    if (index > length) {
      return;
    }

    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    if (index === length) {
      this.addAtTail(val);
      return;
    }

    let node = this.getNode(index);

    node.next = { ...node };
    node.val = val;
  }

  deleteAtIndex(index) {
    if (!this.head) {
      return;
    }

    let length = this.getLength();

    if (index >= length) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    if (index === 0) {
      let { val, next } = this.head.next;

      this.head = {
        val,
        next,
      };

      return;
    }

    let node = this.getNode(index);
    let prevNode = this.getNode(index - 1);

    prevNode.next = node.next;
  }
}
