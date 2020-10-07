let nodeClass = require('../lib/node');
let Node = nodeClass.Node

class LinkedList { 
    constructor() { 
        this.head = null
    }   

    append(data) { 
        this.head = new Node(data)
        return data 
    }

    count() { 
        return 1 
    }

    toString() { 
        return this.head.data
    }
}

module.exports = { 
    LinkedList: LinkedList
}