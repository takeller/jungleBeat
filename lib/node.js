class Node { 
    constructor(data) { 
        this.data = data;
        this.nextNode = null; 
    }

    append(data) { 
        this.nextNode ? this.nextNode.append(data) : this.nextNode = new Node(data)
    }

    insert(position, data, nodeCount = 1) { 
        if ( position === nodeCount) { 
            let newNode = new Node(data)
            newNode.setNextNode(this.nextNode)
            this.setNextNode(newNode)
            return data
        } else if (this.nextNode) { 
            nodeCount += 1
            return this.nextNode.insert(position, data, nodeCount)
        } else { 
            return 'Position outside bounds of list'
        }
    }

    setNextNode(node) { 
        this.nextNode = node
    }

    count(nodeCount = 1) { 
        if (this.nextNode) { 
            nodeCount += 1 
            return this.nextNode.count(nodeCount)
        } else { 
            return nodeCount 
        }
    }

    toString(nodeDataString = null) { 
        // nodeDataString = nodeDataString ? nodeDataString.concat(' ', this.data) : this.data
        if (nodeDataString === null) { 
            nodeDataString = this.data
        } else { 
            nodeDataString = nodeDataString.concat(' ', this.data) 
        }

        if (this.nextNode) { 
            return this.nextNode.toString(nodeDataString)
        } else { 
            return nodeDataString
        }
    }
}

module.exports = { 
    Node: Node
}