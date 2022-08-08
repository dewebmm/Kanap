for(let x in userProduct){
if(userProduct[x].name === userProduct[x].name > 1 ){
  console.log("waf")
}else{
  console.log("miaou")
}}

 for(let x=0; x<userProduct.length; x++){    
    for(let y=0; y<userProduct.length; y++){
      if(x !== y){
        if(userProduct[x].name === userProduct[y].name){
          if(userProduct[x].color === userProduct[y].color){
            userProduct.splice(y,1)
            console.log(userProduct)
            localStorage.setItem("product", JSON.stringify(userProduct))
            window.location.reload()
          }
        }
      }
    }
  }
cart__item inner html = cartUser

              userProduct[x].quantity + userProduct[y].quantity
              userProduct.splice(y,1)
  //suppression des duplique
function isInCart(incomeProduct){

  if(userProduct.filter(product => {
    product.color == incomeProduct.color && product.id == incomeProduct.id}).length > 0){
    console.log('exist')
  }
  
}

const formNodeList = document.querySelectorAll(".cart__order__form__question label")
const formFirstName = formNodeList[0]
formFirstName.innerHTML += 'why not'
console.log(formFirstName)
const formLastName = formNodeList[1]
formLastName.innerHTML += 'why not'
console.log(formLastName)
const formAddress = formNodeList[2]
formAddress.innerHTML += 'why not'
console.log(formAddress)
const formCity = formNodeList[3]
formCity.innerHTML += 'why not'
console.log(formCity)
const formEmail = formNodeList[4]
formEmail.innerHTML += 'why not'
console.log(formEmail)
const productImg = document.querySelector('.item_img')


 
    let productImg = document.querySelector('.item__img')
    productImg.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">` 


     const cartProductTemplate = `
            <article class="cart__item" data-id="${userProduct[i]._id}" data-color="${userProduct[i].color}">
                <div class="cart__item__img">
                  <img src="${userProduct[i].imageUrl}" alt="${userProduct[i].altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${userProduct[i].name}</h2>
                    <p>${userProduct[i].description}</p>
                    <p>${userProduct[i].price}€</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : ${userProduct[i].price}</p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`

    /*(async function() {
    const productId = getProductId()
    const product = await getProduct(productId)
    hydrateProduct(product)
})()

function getProductId() {
    return new URLSearchParams(window.location.search).get('id')
}

function getProduct(productId) {
    return fetch(`http://localhost:3000/api/products/${productId}`)
    .then(function(response) {
        return response.json
    })
    .then(function(products) {
        return products
    })
}

function hydrateProduct(product) {    
    let productImg = document.querySelector('.item__img')
    productImg.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
    let productColors = document.querySelector('#colors')
    productColors.innerHTML = `
    <option value="${product.colors}">${product.colors}</option>
    <option value="${product.colors}">${product.colors}</option>
    <option value="${product.colors}">${product.colors}</option>` 
     

    document.querySelector('#title').textContent = product.name
    document.querySelector('#price').textContent = product.price
    document.querySelector('#description').textContent = product.description    
} */
function getProductId(id){
    let parameters = new URLSearchParams(window.location.search) 
    return parameters.get('id');    
}

getProductId()

const getProducts = function(xyz) {
fetch(`http://localhost:3000/api/products/${xyz}`)
    .then(function(response){
        return response.json()
    })
    .then(function (products) {
        return products
        console.log(products)
    })
}

getProducts()

console.log(getProductId())



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



                *********************
                
const productImg = document.querySelector('.item_img')
 let parameters = new URLSearchParams.get(window.location.search) 
 console.log(parameters)
function getProductId(parameterName){
   
   
    return parameters.get(parameterName);    
}

getProductId("id")
