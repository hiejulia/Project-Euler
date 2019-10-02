const sKey = {};
const itemsWM = new WeakMap();


class DataStructure {
    constructor() {

        itemsWM.set(sKey, [])
    
    }

    push(element) {
        let stack = itemsWM.get(sKey);
        stack.push(element);
    }

    pop() {
        let stack = itemsWM.get(sKey)
        return stack.pop()
    }

    peek() {
       let stack = itemsWM.get(sKey);
       return stack[stack.length - 1];
    }

    clear() {
        itemsWM.set(sKey, []);
    }

    size() {
       return itemsWM.get(sKey).length;
    }

}
