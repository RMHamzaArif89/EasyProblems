var MyQueue=function queue(){
    let collection=[];
    
    this.enque=function enque(element){
        collection.push(element)
    }
    
    this.deque= function deque(element){
        collection.shift()
    }
    
    this.size=function size(element){
        return collection.length
    }
    
    this.values= function values(){
        return collection
    }

    
    
    this.front= function front(){
        return collection[0]
    }
    this.rare=function rare(){
        return collection[collection.length-1]
    }
}

var queue= new MyQueue();
queue.enque(1)
queue.enque(2)
queue.enque(3)
queue.enque(10)
console.log(queue.size())

queue.deque(1)
console.log(queue.values())

console.log(queue.front())

console.log(queue.rare())

