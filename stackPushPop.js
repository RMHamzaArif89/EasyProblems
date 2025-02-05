var myStack=function stackFunc(){
    
    this.count=0;
    this.storage={};
   
   this.push=function(val){
       this.storage[this.count]=val;
       this.count++;
   }
   this.pop=function(val){
       if(this.count===0){
           return undefined
       }
       this.count--;
       let result=this.storage[this.count];
       delete this.storage[this.count];
       return result
   }
   
   this.size=function size(){
       return this.count;
   }
   this.peak=function peak(){
       return this.storage[0]
   }
   this.last=function last(){
       return this.storage[this.count-1];
   }
   
   
}

var stack=new myStack();
console.log(stack.size)
stack.push(1)
stack.push(2)
stack.push(4)
stack.push(6)
console.log(stack.size())
console.log("peak value in stack is",stack.peak())
console.log("last value in stack is",stack.last())
