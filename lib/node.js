class Node { 
    constructor(data) { 
        this.data = data;
        this.next_node = null; 
    }

    get data() { 
        return this.data;
    }

    get next_node() {
        return this.next_node;
    }
}

module.exports = { 
    Node: Node
}