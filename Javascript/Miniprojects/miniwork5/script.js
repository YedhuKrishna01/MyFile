class Vehicle {
    name = "";
    model = "";
    constructor(name,model){
        
    }
    setInfo(){
        this.name = name;
        this.model = model;
    }

    getInfo(){
        console.log(`Vehicle ${this.model} with name ${this.name}`);
    }
    
}

let obj1 = new Vehicle();
obj1.setInfo("benz","sclass");
obj1.getInfo();