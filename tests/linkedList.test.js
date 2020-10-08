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
        list.append("world!")

        expect(list.head).toBeInstanceOf(Node)
        expect(list.head.data).toEqual('hello')
        expect(list.head.nextNode.data).toEqual('world!')
    });

    it('Can count nodes in the list', () => {
        let list = new LinkedList()

        list.append("hello")
        expect(list.count()).toEqual(1)

        list.append("world")
        expect(list.count()).toEqual(2)
    });

    it('Can generate a string of all the elements in the list, space seperated', () => { 
        let list = new LinkedList()

        list.append("hello")
        expect(list.toString()).toEqual('hello')

        list.append("world!")
        expect(list.toString()).toEqual('hello world!')
    });

    it('Can prepend a node to the list', () => { 
        let list = new LinkedList() 

        list.prepend("world!")
        expect(list.toString()).toEqual('world!')
        expect(list.count()).toEqual(1)

        list.prepend('Hello')
        expect(list.toString()).toEqual('Hello world!')
        expect(list.count()).toEqual(2)
    });

    it('Can insert nodes at a given position in the list', () => { 
        let list = new LinkedList() 
        list.append('Hello')
        list.append('world!')
        list.insert(1, 'to the')

        expect(list.count()).toEqual(3)
        expect(list.toString()).toEqual('Hello to the world!')

        list.insert(2, 'beautiful')
        expect(list.count()).toEqual(4)
        expect(list.toString()).toEqual('Hello to the beautiful world!')
    });

    it('Returns an error message if the insert position is not valid', () => { 
        let list = new LinkedList() 
        list.append('Hello')

        expect(list.insert(3, 'world!')).toEqual('Position outside bounds of list')
    });

    it('can find elements in the list', () => { 
        let list = new LinkedList() 
        list.append('Hello')
        list.append('world!')
        list.insert(1, 'to the')
        list.insert(2, 'beautiful')

        expect(list.find(0, 1)).toEqual('Hello')
        expect(list.find(1, 2)).toEqual('to the beautiful')
        expect(list.find(2, 2)).toEqual('beautiful world!')
    });

    it('can check if a value is included in the list', () => {
        let list = new LinkedList
        list.append('Hello')
        list.append('world!')
        
        expect(list.includes('Hello')).toEqual(true)
        expect(list.includes('taylor')).toEqual(false)
    });

    it('Can pop of the final element in the list', () => { 
        let list = new LinkedList
        list.append('Hello')
        list.append('to the')
        list.append('world!')

        expect(list.count()).toEqual(3)
        list.pop()
        expect(list.count()).toEqual(2)
        expect(list.toString()).toEqual('Hello to the')
    });
});