const getProducts = () => {
    fetch('http://localhost:3000/api/products')
    .then((data) => {
        return data.json();
    }).then((result) => {
        document
        .innerText = value.
        console.log(result)
    });
}
getProducts();

console.log(getProducts[0])

/**********************************
        for (let product in products){
        let productName = document.querySelector('.productName');
        productName.innerHTML = `${products[i].name}`;
        console.log(productName)*//
/**************************************** */
    while (i < 10) {
        console.log(i)
        i++;
        if (1 === 5) continue;

    }

        const {name, description, colors, _id, altTxt, price, imageUrl} = data;
        document.querySelector('.productName').textContent = name;
document.querySelector('article + img').setAttribute.src = `${data[0].altTxt}`;

        let productImg = document.querySelector('#items > img').innerHTML.src = `${data[0].imageUrl}`;

        productImg = data.imageUrl
        productTxt = data.altTxt
        console.log(productName)

/*noms*******************************/
            const productNameJs = result.map(products => {
            return products.name;                     
        })
        console.log(productNameJs);
        document.getElementsByClassName('productName').innerHTML = productNameJs[0];

/*description************************/
            const productDescriptionJs = result.map(products => {
            return products.description;           
        })
        console.log(productDescriptionJs);

/*img*******************************/
            const productImgJs = result.map(products => {
            return products.imageUrl;
        })
        console.log(productImgJs);
/*alt*******************************/
            const productAltJs = result.map(products => {
            return products.altTxt;                     
        })
        console.log(productAltJs);



        for(let i in products){
            console.log(products[i].name)
            console.log(products[i].imageUrl)
            console.log(products[i]._id)
            console.log(products[i].altTxt)
            console.log(products[i].description)

            let items = document.querySelector("#items")
            items.innerHTML = `
            <a href="./product.html?id=${products[i]._id}">
                <article>
                    <img src="${products[i].imageUrl}" alt="${products[i].altTxt}">
                    <h3 class="productName">${products[i].name}</h3>
                    <p class="productDescription">${products[i].description}</p>
                </article>
            </a>`
            for (let product in products){
                product = items