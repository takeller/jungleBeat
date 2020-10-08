let listClass = require('../lib/linkedList');
let LinkedList = listClass.LinkedList

class JungleBeat { 
    constructor() { 
        this.list = new LinkedList()
    };

    append(data) { 
        let parsedData = data.split(' ')
        for (let n of parsedData) { 
            this.list.append(n)
        }
    };

    count() { 
        return this.list.count()
    };
}

module.exports = { 
    JungleBeat: JungleBeat
}