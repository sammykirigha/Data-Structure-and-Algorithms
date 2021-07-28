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


//Queues

function Queue(array) {
    this.array = [];
    if (array) this.array = array;
}

Queue.prototype.getBuffer = function () {
    return this.array.slice();
}

Queue.prototype.isEmpty = function () {
    return this.array.length == 0;
}

Queue.prototype.peek = function () {
    return this.array[0]
}

Queue.prototype.enqueue = function (value) {
    return this.array.push(value)
}

Queue.prototype.dequeue = function () {
    return this.array.shift()
}

//access 
function queueAccessNthTopNode(queue, n) {
    let bufferArray = queue.getBuffer()

    if (n <= 0) throw 'error'
    
    let bufferQueue = new Queue(bufferArray)
    
    while (--n !== 0) {
        bufferQueue.dequeue()
    }
    return bufferQueue.dequeue()
}

//search
function queueSearch(queue, element) {
    let bufferArray = queue.getBuffer()

    let bufferQueue = new Queue(bufferArray)

    while (!bufferQueue.isEmpty()) {
        if (bufferQueue.dequeue()) {
            return true
        }
    }
    return false;
}

//design a cashier class that takes in a customer object and handles food ordering on a first-come, first-served basis

function Customer(name, order) {
    this.name = name,
    this.order = order
}

function Cashier() {
    this.customers = new Queue()
}

Cashier.prototype.addOrder = function (customer) {
    this.customers.enqueue(customer)
}

Cashier.prototype.deliverOrder = function () {
    let finishedCustomer = this.customers.dequeue()

    console.log(finishedCustomer.name + " your " + finishedCustomer.order + " is ready")
    
}

let cashier = new Cashier();
let customer1 = new Customer('Sammy', 'Fish wet fry');
let customer2 = new Customer('John', 'beef choma');

cashier.addOrder(customer1);
cashier.addOrder(customer2);

console.log(cashier.deliverOrder())
console.log(cashier.deliverOrder())