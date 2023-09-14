let arr=[1,4,6,9,3];
console.log(arr[3])
let b={
    name:"john",
    address:[2,5,7,7,0],
    names:{
        place:"paris",
        fruit:"apple",
        color:"red"
    }
}
console.log(b.address[2]);
console.log(b.names.fruit);
arr.push(5,6,7);
console.log(arr);
function funt1(i){
    arr.push(i,"john");
    console.log(arr);
}
funt1(3);
console.log(arr.includes(0));
console.log(arr.at(4));
console.log(arr.indexOf("john"));

