let listClass = require('../lib/linkedList');
let LinkedList = listClass.LinkedList
let nodeClass = require('../lib/node');
let Node = nodeClass.Node



describe('linkedList', () => { 

    it('Is an instance of LinkedList', () => { 
        let list = new LinkedList()
        expect(list).toBeInstanceOf(LinkedList)
    });

    it('Doesnt have a head by default', () => { 
        let list = new LinkedList()
        expect(list.head).toEqual(null)
    });

    it('Can append a node', () => { 
        let list = new LinkedList() 
        list.append("hello")
        expect(list.head).toBeInstanceOf(Node)
    });

    it('Can count nodes in the list', () => {
        let list = new LinkedList()
        list.append("hello")
        expect(list.count).toEqual(1)
    });

    it('Can generate a string of all the elements in the list, space seperated', () => { 
        let list = new LinkedList()
        list.append("hello")
        expect(list.toString).toEqual('hello')
    });
});