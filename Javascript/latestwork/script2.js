let details=document.getElementById("details")
let price = document.getElementById("price");
let title = document.getElementById("title");
let prod = document.getElementById("img");
let id = Number(window.location.href.split("id=")[1]);
fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(data => {
    let li = `          
        <img src="${data.thumbnail}" alt="${data.title}"width="105%">           
    `
    let li1=`<h2>${data.title}</h2>`
    let li2=`<h3>$${data.price}</h3>`
    let li3=`<p>${data.description}</p>`
    prod.innerHTML = li;
    title.innerHTML=li1;
    price.innerHTML=li2;
    details.innerHTML=li3;
});

function add(){
    let details=document.getElementById("details")
    let price = document.getElementById("price");
    let title = document.getElementById("title");
    let prod = document.getElementById("img");
    let id = Number(window.location.href.split("id=")[1]);
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(data => {
        let li = `          
            <img src="${data.thumbnail}" alt="${data.title}"width="105%">           
        `
        let li1=`<h2>${data.title}</h2>`
        let li2=`<h3>$${data.price}</h3>`
        let li3=`<p>${data.description}</p>`
        prod.innerHTML = li;
        title.innerHTML=li1;
        price.innerHTML=li2;
        details.innerHTML=li3;
    });
}