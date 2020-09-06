const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);

        if(this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let current = this._head;
        let counter = 0;

        while(counter < index) {
            current = current.next;
            counter++;
        }

        return current.data;
    }

    insertAt(index, data) {
        if(index < 0 || index > this.length) {
            return false;
        }

        let node = new Node(data);

        let prev = null;
        let current = this._head;
        let counter = 0;

        if(index === 0) {
            current.prev = node;
            node.next = current;
            this._head = node;
        } else if(this.length === index) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            while(counter < index) {
                prev = current;
                current = current.next;
                counter++;
            }
    
            prev.next = node;
            node.prev = prev;
            node.next = current;
            current.prev = node;
        }

        this.length++;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        delete this._head;
        delete this._tail;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        let current = this._head;
        let prev = null;
        let counter = 0;

        while(counter < index) {
            prev = current;
            current = current.next;
            counter++;
        }

        prev.next = current.next;
        current = current.next;
        current.prev = prev;

        this.length--;
    }

    reverse() {
        
    }

    indexOf(data) {
        let current = this._head;
        let index = 0;
        while(current) {
            if(current.data === data) {
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    }
}

module.exports = LinkedList;
