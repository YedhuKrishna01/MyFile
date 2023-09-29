function check(){
    let reg = /[a-zA-Z]/
    let input = document.getElementById("fname").value;
    console.log(reg.test(input));

}



// let reg = /[a-zA-Z]+@+gmail.com/;
// let str = ;
// console.log(reg.test(str)); 
// if(reg.test(str)===true){
//     alert("This email is Valid !!")
// }
