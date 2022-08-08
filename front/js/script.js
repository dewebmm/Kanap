let productName = [];
let aProduct = document.querySelector("#items > a")
        

const getProducts = function() {
fetch('http://localhost:3000/api/products')
    .then(function(response){
        return response.json()
    })
    .then(function (data) {
        let products = data;
         for(let i in products){
        }
        
        function productTemplate(product) {
            return `
            <a href="./product.html?id=${product._id}">
                <article>
                    <img src="${product.imageUrl}" alt="${product.altTxt}">
                    <h3 class="productName">${product.name}</h3>
                    <p class="productDescription">${product.description}</p>
                </article>
            </a>`
        }
        let items = document.querySelector("#items")
        items.innerHTML = `${products.map(productTemplate).join('')}`;
        }
    )}

getProducts()