
class HashTable {
    constructor(size = 53){
       this.keyMap = new Array(size)
    }

 _hash(key){
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total
 }
    
 //set function
 set(key, value){
    let index = this._hash(key)
    if (!this.keyMap[index]) {
        this.keyMap[index] = []
    }
     return this.keyMap[index].push([key, value])
     
 }
    //get method
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index]; i++){
                if (this.keyMap[index][i] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }
    
    //get all values
    values() {
        let ValueArr = [];
        for (let i = 0; i < this.keyMap.length; i++){
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++){
                    if (!ValueArr.includes(this.keyMap[i][j][1])) {
                        ValueArr.push(this.keyMap[i][j][1]); 
                    }
                }
            }
        }
        return ValueArr;
    }

    keys() {
        let KeysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!KeysArr.includes(this.keyMap[i][j][0]))
                     KeysArr.push(this.keyMap[i][j][0]);
                }
            }
        }
        return KeysArr;
    }
}
 
let ht = new HashTable();
ht.keys().forEach(function(key){
    return ht.get(key)
})

ht.set("hello", "goodbye");
ht.set("blue", "color")
ht.set("pink", "sky")



