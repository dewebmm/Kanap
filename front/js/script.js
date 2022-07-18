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
            console.log(products[i].name,products[i].imageUrl,products[i]._id,products[i].altTxt,products[i].description)
        }
        
        function productTemplate(products) {
            return `
            <a href="./product.html?id=${products._id}">
                <article>
                    <img src="${products.imageUrl}" alt="${products.altTxt}">
                    <h3 class="productName">${products.name}</h3>
                    <p class="productDescription">${products.description}</p>
                </article>
            </a>`
        }
        let items = document.querySelector("#items")
        items.innerHTML = `${products.map(productTemplate).join('')}`

        
            ;
        }
        
        /*<a href="./product.html?id=42">
            <article>
              <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
          </a> -->*/
        
    )}


        /*let aTag = document.createElement("a");
        let articleTag = document.createElement("article");
        let imgTag = document.createElement("img");
        let h3Tag = document.createElement("h3");
        let section = document.querySelector("section");
        let article = document.querySelector("article");
        section.appendChild(aTag);
        section.appendChild(articleTag);
        article.appendChild(imgTag);
        article.appendChild(h3Tag);
     
        let productName = document.querySelector('.productName');
        productName.innerHTML = `${products[i].name}`;
        console.log(productName)

        let productDescription = document.querySelector('.productDescription');
        productDescription.innerHTML = `${data[1].description}`;
        console.log(data[0].description)

        let productImg = document.querySelector("#items > a > article > img");
        console.log(productImg)
        productImg.src = `${data[0].imageUrl}`;
        console.log(data[0].imageUrl)*/


getProducts()