import { gv, gv2 } from './script.js';

console.log(gv);

const prod = document.getElementById("prod");

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
      let productGrid = document.createElement('div');
      productGrid.classList.add('product-grid');

      data.products.forEach((element, index) => {
          const card = `
            <div class="product-card" style="border-radius:20px;background-color:cornflowerblue;color:white;height:45vh">
                <a href="product.html?id=${element.id}">
                    <img src="${element.thumbnail}" alt="${element.title}">
                    <div class="card-details" style="color:white;font-family:sans-seriff">
                    <div class="title">${element.title}</div>
                    <div class="price">$${element.price}</div>
                    </div>
                </a>
                
            </div>
          `;
          productGrid.innerHTML += card;

          if ((index + 1) % 6 === 0) {
              const productRow = document.createElement('div');
              productRow.classList.add('product-row');
              productRow.appendChild(productGrid);
              prod.appendChild(productRow);
              productGrid = document.createElement('div');
              productGrid.classList.add('product-grid');
          }
      });

      if (data.products.length % 6 !== 0) {
          const productRow = document.createElement('div');
          productRow.classList.add('product-row');
          productRow.appendChild(productGrid);
          prod.appendChild(productRow);
      }
  });