let listClass = require('../lib/linkedList');
let LinkedList = listClass.LinkedList
let nodeClass = require('../lib/node');
let Node = nodeClass.Node
let jungleBeatClass = require('../lib/jungleBeat');
let JungleBeat = jungleBeatClass.JungleBeat

describe('JungleBeat', () => { 
    it('Is an instance of jungleBeat', () => { 
        let jb = new JungleBeat()
        expect(jb).toBeInstanceOf(JungleBeat)
    });

    it('Contains an empty linked list on instantiation', () => { 
        let jb = new JungleBeat()
        expect(jb.list).toBeInstanceOf(LinkedList)
        expect(jb.list.head).toEqual(null)
    });

    it('Can append multi-word strings to the linked list', () => { 
        let jb = new JungleBeat()
        jb.append("Hello to the world!")
        expect(jb.list.head.data).toEqual('Hello')
        expect(jb.list.head.nextNode.data).toEqual('to')
        expect(jb.list.count()).toEqual(4)
        expect(jb.list.toString()).toEqual('Hello to the world!')
    });

    it('Can count the number of elements in its list', () => {
        let jb = new JungleBeat()
        jb.append('Hello to the world!')
        expect(jb.count()).toEqual(4)
    });
})