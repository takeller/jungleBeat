let nodeClass = require('../lib/node');
let Node = nodeClass.Node

class LinkedList { 
    constructor() { 
        this.head = null
    }   

    prepend(data) { 
        if (this.head) { 
            let newNode = new Node(data)
            newNode.setNextNode(this.head)
            this.head = newNode
            return data
        } else { 
            this.head = new Node(data)
            return data
        }
    }

    append(data) { 
        // this.head = this.head ? this.head.nextNode : new Node(data)

        if (this.head) { 
            return this.head.append(data)
        } else { 
            this.head = new Node(data)
            return data
        }
    }

    insert(position, data) { 
        if (position === 0) {
            this.prepend(data)
        } else if (this.head) { 
            return this.head.insert(position, data)
        } else { 
            this.head = new Node(data)
            return data
        }
    }

    pop() { 
        if (this.head) { 
            return this.head.pop()
        } else { 
            return null 
        }
    }

    find(position, returnAmount) { 
        if (this.head) { 
            return this.head.find(position, returnAmount)
        } else { 
            return null
        }
    }

    includes(value) { 
        if (this.head) { 
            return this.head.includes(value)
        } else { 
            return false
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