/*let a = prompt("");
let b = prompt("");
let c = prompt("");
let cnd = b*b-4*a*c;
console.log(cnd);
const root = Math.sqrt(cnd);
if (cnd>0){
    const X1 =(-b+root)/(2*a);
    const X2 =(-b-root)/(2*a);
    alert("The answer is positive");
    alert(X1);
    alert(X2);
}
else if (cnd==0){
    alert("0");
}
else{
    alert("The output is negative");
}
let date=new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getMonth());
function one(){
    console.log("Hello");
}
let to = setTimeout(()=>console.log("ok"),3000);
let si=setInterval(one,1000);
clearInterval(si);/*let a = prompt("");
let b = prompt("");
let c = prompt("");
let cnd = b*b-4*a*c;
console.log(cnd);
const root = Math.sqrt(cnd);
if (cnd>0){
    const X1 =(-b+root)/(2*a);
    const X2 =(-b-root)/(2*a);
    alert("The answer is positive");
    alert(X1);
    alert(X2);
}
else if (cnd==0){
    alert("0");
}
else{
    alert("The output is negative");
}
let date=new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getMonth());
function one(){
    console.log("Hello");
}
let to = setTimeout(()=>console.log("ok"),3000);
let si=setInterval(one,1000);
clearInterval(si);
let hr=10;
let min=55;
let sec=30;
console.log(`${hr}:${min}:${sec}`)
function getdata(url,callback){
    callback(url);
}
function getdata2(url){
    let promise = new Promise((res,rej) => {
        res(url);
    });
    return promise;
}

async function getdata3(url){
    return url;
}

getdata("Get-Teachers",data =>{
    /*

   
   getdata(data,data2 =>{
    getdata(data2,data3 =>{
        console.log(data3);
    })
   })
});
getdata2("Get-Teachers")
.then(data =>getdata2(data))
.then(data2 =>getdata2(data2))
.then(data3 =>console.log(data3))
.catch(error =>console.log(error));

async function get() {
    let teachers = await getdata3("Get-Teachers");
    let classes = await getdata3(teachers);
    let students =await getdata3(classes);
    console.log(students);
}

get();
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res=>{
    console.log(res,"hello");
})
.catch(err=>{
    console.log(err);
})
let obj = {
    name:"Yedhu",
    age:"22",
    place:"Thrissur"
}
let {name,age,place} = obj;
console.log(name,place);

const arr = [1,2,3,4,5]
let [a,b,c,d,e] = arr;
console.log(d);
const arr2=[...arr];
arr2[2]=55;
console.log(arr,arr2);

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(res => res.json())
.then(data => console.log(data));

let abc=(async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos")
    let data = await res.json();
    for(i=0;i<200;i++){
        console.table(data[i]);
    }
});
abc();
let obj1={
    name:"Yedhu",
    age:22
}
let obj2={
    place:"Thrissur",
    pincode:666666
}
let obj={...obj1,...obj2};
console.log(obj);
let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
let arr=[...arr1,...arr2];
console.log(arr)

let hr=10;
let min=55;
let sec=30;
console.log(`${hr}:${min}:${sec}`)
function getdata(url,callback){
    callback(url);
}
function getdata2(url){
    let promise = new Promise((res,rej) => {
        res(url);
    });
    return promise;
}

async function getdata3(url){
    return url;
}/*let a = prompt("");
let b = prompt("");
let c = prompt("");
let cnd = b*b-4*a*c;
console.log(cnd);
const root = Math.sqrt(cnd);
if (cnd>0){
    const X1 =(-b+root)/(2*a);
    const X2 =(-b-root)/(2*a);
    alert("The answer is positive");
    alert(X1);
    alert(X2);
}
else if (cnd==0){
    alert("0");
}
else{
    alert("The output is negative");
}
let date=new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getMonth());
function one(){
    console.log("Hello");
}
let to = setTimeout(()=>console.log("ok"),3000);
let si=setInterval(one,1000);
clearInterval(si);
let hr=10;
let min=55;
let sec=30;
console.log(`${hr}:${min}:${sec}`)
function getdata(url,callback){
    callback(url);
}
function getdata2(url){
    let promise = new Promise((res,rej) => {
        res(url);
    });
    return promise;
}

async function getdata3(url){
    return url;
}

getdata("Get-Teachers",data =>{
    /*

   
   getdata(data,data2 =>{
    getdata(data2,data3 =>{
        console.log(data3);
    })
   })
});
getdata2("Get-Teachers")
.then(data =>getdata2(data))
.then(data2 =>getdata2(data2))
.then(data3 =>console.log(data3))
.catch(error =>console.log(error));

async function get() {
    let teachers = await getdata3("Get-Teachers");
    let classes = await getdata3(teachers);
    let students =await getdata3(classes);
    console.log(students);
}

get();
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res=>{
    console.log(res,"hello");
})
.catch(err=>{
    console.log(err);
})
let obj = {
    name:"Yedhu",
    age:"22",
    place:"Thrissur"
}
let {name,age,place} = obj;
console.log(name,place);

const arr = [1,2,3,4,5]
let [a,b,c,d,e] = arr;
console.log(d);
const arr2=[...arr];
arr2[2]=55;
console.log(arr,arr2);

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(res => res.json())
.then(data => console.log(data));

let abc=(async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos")
    let data = await res.json();
    for(i=0;i<200;i++){
        console.table(data[i]);
    }
});
abc();*/
/*

   
   getdata(data,data2 =>{
    getdata(data2,data3 =>{
        console.log(data3);
    })
   })
});
getdata2("Get-Teachers")
.then(data =>getdata2(data))
.then(data2 =>getdata2(data2))
.then(data3 =>console.log(data3))
.catch(error =>console.log(error));

async function get() {
    let teachers = await getdata3("Get-Teachers");
    let classes = await getdata3(teachers);
    let students =await getdata3(classes);
    console.log(students);
}

get();
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res=>{
    console.log(res,"hello");
})
.catch(err=>{
    console.log(err);
})
let obj = {
    name:"Yedhu",
    age:"22",
    place:"Thrissur"
}
let {name,age,place} = obj;
console.log(name,place);

const arr = [1,2,3,4,5]
let [a,b,c,d,e] = arr;
console.log(d);
const arr2=[...arr];
arr2[2]=55;
console.log(arr,arr2);

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(res => res.json())
.then(data => console.log(data));

let abc=(async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos")
    let data = await res.json();
    for(i=0;i<200;i++){
        console.table(data[i]);
    }
});
abc();*/
/*
let obj1={
    name:"Yedhu",
    age:22
}
let obj2={
    place:"Thrissur",
    pincode:666666
}
let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
let obj3={
    firstname:"Yedhu",
    lastname:"Krishna",
    color:"Red"
}
let {firstname,lastname,...obj}=obj3;
console.log(obj3);
let arr3=[1,2,3,4,5];
let[a,b,...arr]=arr3;
console.log(arr3)

let trial=document.getElementById("trial");  //based on id
console.log(trial);
trial.innerHTML+="<b> hi</b>";
trial.style.backgroundColor="red";

let trials=document.getElementsByClassName("trials");  //based on class
console.log(trials);
trials[1].innerHTML+="<u> example2</u>"
trials[1].style.backgroundColor="green";
let trial=document.getElementsByClassName("trial");
trial[0].style.backgroundColor="red";
trial[0].style.height="100px";
trial[0].style.width="100px";
console.log(trial);
function bginc(){
    for(i=0;i<1000;i+=50){
        trial[0].style.height+=i;
        trial[0].style.width+=i;
    }
}
si= setInterval(bginc,1000)


function add(){
    let trial=document.getElementById("trial");
    let hn = Number(trial.style.height.split("px")[0]);
    trial.style.height = String(hn + 50) + "px";
    trial.style.width = String(hn + 50) + "px";
}
setInterval(add,1000)*/



