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

    pop(previousNode = null) { 
        if (this.nextNode === null) {
            previousNode.nextNode = null
            return this.data
        } else { 
            return this.nextNode.pop(this)
        }
    }

    setNextNode(node) { 
        this.nextNode = node
    }

    find(position, returnAmount) { 
        let currentNode = this.transverse(position)
        let collectedData = currentNode.data
        returnAmount -= 1

        while (returnAmount > 0) { 
            currentNode = currentNode.nextNode
            collectedData = collectedData.concat(' ', currentNode.data)
            returnAmount -= 1 
        }
        return collectedData
    }

    includes(value) { 
        if (this.data === value) { 
            return true 
        } else if (this.nextNode === null) { 
            return false 
        } else { 
            return this.nextNode.includes(value)
        }
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

    transverse(position, nodeCount = 0) { 
        if (position === nodeCount) { 
            return this 
        } else { 
            nodeCount += 1 
            return this.nextNode.transverse(position, nodeCount)
        }
    }
}

module.exports = { 
    Node: Node
}