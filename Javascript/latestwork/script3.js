// function add(){
//     let prod = document.getElementById("pCard");
//     let response = fetch("https://dummyjson.com/products");
//     response.then(res =>{
//     return res.json()
//     })
//     .then(data =>{
//         data.products.forEach(element => {
//         console.log(element.title);
//         console.log(element);
//         let card = `<h1>${element.title}</h1>
//         <img src="${element.thumbnail}">
//         <a href = "http://127.0.0.1:5500/prod.html?id=${element.id}"><br><input type="submit" style="background-color:red;color:white;margin-top:5vh;border:none;font-size:25px;border-radius:10px;padding:1vh 2vh" value="view"></a>`
//         prod.innerHTML+=card;
//         console.log(prod)
//         });
//     })
    
// }