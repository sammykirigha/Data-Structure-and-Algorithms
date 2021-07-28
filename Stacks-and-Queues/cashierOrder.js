//design a cashier class that takes in a customer object and handles food ordering on a
// first-come, first-served basis;

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }

    dequeue() {
        let tmp = this.first;
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next;
        return tmp.value;
    }
}

class Customer{
    constructor(name, order) {
        this.name = name,
        this.order = order;
    }
}

class Cashier{
    constructor() {
        this.customers = new Queue()
    }

    addOrder(customers) {
        this.customers.enqueue(customers)
    }

    deliverOrder() {
        let finishedOrder = this.customers.dequeue()
        console.log(finishedOrder.name + " your " + finishedOrder.order + " is ready")
    }
}

let cashier = new Cashier();

let customer1 = new Customer('Sam', 'rice')
let customer2 = new Customer('Floo', 'meatball')
let customer3 = new Customer('Peter', 'fish');

cashier.addOrder(customer1)
cashier.addOrder(customer2)
cashier.addOrder(customer3)

cashier.deliverOrder();
cashier.deliverOrder();
cashier.deliverOrder();