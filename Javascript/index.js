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
clearInterval(si);
let hr=10;
let min=55;
let sec=30;
console.log(`${hr}:${min}:${sec}`)*/
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

    */
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