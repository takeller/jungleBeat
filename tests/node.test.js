let Node = require('../lib/node');
// Node.new 
// node.data
// node.next_node

describe('Node', () => {

    beforeAll(() => {
        let node1 = new Node("Hello")
        let node2 = new Node("world!")
    });

    it('Creates a new node', () => {
        expect(node1).toBeInstanceOf(Node);
    });

    it('Can access a nodes data', () => {
        expect(node1.data).toEqual("Hello")
        expect(node2.data).toEqual("world!")
    });

    it('Can access pointer to the next node', () => {
        expect(node1.next_node).toEqual(Node2)
        expect(node2.next_node).toEqual(null)
    });
})
