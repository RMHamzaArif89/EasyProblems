var mySet=function mySet(){
    let collection=[];
    this.has=function has(element){
             return (collection.indexOf(element) !== -1)
    }
    
    this.add=function add(element){
      if (!this.has(element)){
            collection.push(element)
            return true
        }
           return false
    }
    
  
    
    this.values=function values(val){
        return collection;
    }
    this.size= function size(){
        return collection.length;
    }
    this.remove= function remove(val){
        index=collection.indexOf(val);
        if(this.has(val)){
            collection.splice(index,1)
            return true;
        }
        return false;
    }
    
    this.union=function union(otherSet){
        var unionSet= new Set();
        var firstSet= collection.values();
        var secondSet= otherSet.values();
        
        firstSet.forEach(function(e){
            unionSet.add(e)
        })
        
        secondSet.forEach(function(e){
            unionSet.add(e)
        })
        return unionSet;
        
    }
    
    this.intersection=function intersection(otherSet){
        var intersect= new Set();
        var firstSet=collection.values();
        var secondSet=otherSet.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersect.add(e)
            }
        })
        return intersect
    }
    
    this.difference=function difference(otherSet){
        var differenceSet= new Set();
        var firstSet=collection.values();
        var secondSet=otherSet.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })
        return differenceSet
    }
    
    
    
}

let setA= new mySet();
let setB= new mySet();
setA.add(1);
setB.add(2);
setA.add(3);
setB.add(4);
setA.add(4);
console.log(setB.values())
console.log(setA.size());
console.log(setA.union(setB).values())
console.log(setA.intersection(setB).values())
console.log(setA.difference(setB).values())
setA.remove(1);
console.log(setA.values())

