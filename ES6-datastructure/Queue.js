const qKey = {};
    const items = new WeakMap();

    class Queue {
        constructor() {
            
        }
    }


class Queue {
    constructor() {
    
    }
}

var Queue = (() => {
    const qKey = {};
    const items = new WeakMap();

    class Queue {

        constructor() {
            items.set(qKey, []);
        }

        add(element) {
            let queue = items.get(qKey);
            queue.push(element);
        }

        remove() {
            let queue = items.get(qKey);
            return queue.shift();
        }

        peek() {
            let queue = items.get(qKey);
            return queue[queue.length - 1];
        }

        front() {
            let queue = items.get(qKey);
            return queue[0];
        }

        clear() {
            items.set(qKey, []);
        }

        size() {
            return items.get(qKey).length;
        }
    }

    return Queue;
})();




// Priority queue 

function add(newEl) {
    let queue = items.get(pqkey);
    let newElPosition = queue.length;

    if(!queue.length) {
        queue.push(newEl);
        return;
    }

    for (let [i,v] of queue.entries()) {
        if(newEl.priority > v.priority) {
             newElPosition = i;
             break;
        }
    }

    queue.splice(newElPosition, 0, newEl);
}

// End priority queue 

