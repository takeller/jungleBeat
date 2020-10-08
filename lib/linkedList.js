let nodeClass = require('../lib/node');
let Node = nodeClass.Node

class LinkedList { 
    constructor() { 
        this.head = null
    }   

    append(data) { 
        // this.head = this.head ? this.head.nextNode : new Node(data)

        if (this.head) { 
            this.head.append(data)
            return data
        } else { 
            this.head = new Node(data)
            return data
        }
    }

    count() { 
        if (this.head) { 
            return this.head.count()
        } else { 
            return 0 
        }
    }

    toString() { 
        if (this.head) {
            return this.head.toString()
        } else {
            return null
        }
    }
}

module.exports = { 
    LinkedList: LinkedList
}