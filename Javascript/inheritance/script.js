class Vehicle{
    name = "";
    color = "";
    #private = null;
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    get private(){
        return this.#private;
    }
    set private(pri){
        this.#private = pri;
    }
}
let obj = new Vehicle("name","color");
obj.private = "This is a private variable";
console.log(obj.private);
console.log(obj);