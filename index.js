function Stack(array) {
    this.array = [];
    if(array) this.array = array
}

Stack.prototype.getBuffer = function () {
    return this.array.slice()
}

Stack.prototype.isEmpty = function () {
    return this.array.length == 0
}

Stack.prototype.peek = function () {
    return this.array[this.array.length - 1]
}

Stack.prototype.push = function (value) {
    return this.array.push(value);
}

Stack.prototype.pop = function () {
    return this.array.pop();
}

//accessing a specific element in the stack
function stackAccessNthTopNode(stack, n) {
    let bufferArray = stack.getBuffer()
    if (n <= 0) {
        throw 'error'
    }
    let bufferStack = new Stack(bufferArray)

    while (--n !== 0) {
        bufferStack.pop()
    }
    return bufferStack.pop()
}

//search the stack to get a specific element
function stackSearch(stack, element) {
    let bufferArray = stack.getBuffer()
    let bufferStack = new Stack(bufferArray);

    while (!bufferStack.isEmpty()) {
        if (bufferStack.pop() == element) {
            return true
        }
    }
    return false;
}

let stack2 = new Stack()
// const stack1 = new Stack;

stack2.push(1)
stack2.push(2)
stack2.push(3)
stack2.push(4)
stack2.push(5)
stack2.push(6)
stack2.push(7)

console.log(stackSearch(stack2, 3))
console.log(stack2)