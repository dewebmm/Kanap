const PRODUCTS_URL = "http://localhost:3000/api/products/";
let productColors = document.getElementById("colors")
let productImg = document.querySelector('.item__img')
let img = document.getElementsByTagName('img');
//recuperation de l'id du produit a partir de l'url
function getProductId(){
    let parameters = new URLSearchParams(window.location.search) 
    return parameters.get('id');
}
//creation d'un template pour dupliqué en fonction du nombre de couleur
function colorOptionTemplate(color) {
            return `<option value="${color}">${color}</option>`
        }
//recuperation du produit a partir de l'id dans l'api et les afficher
async function getProduct(productId) {
    const catchProduct = await fetch(PRODUCTS_URL + getProductId('id'))
    .then((catchProducts) => catchProducts.json())
    .then(function (data) {
        product = data
        console.log(product)
        
        productImg.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
                
     
        document.querySelector('#title').textContent = product.name
        document.querySelector('#price').textContent = product.price /10
        document.querySelector('#description').textContent = product.description  

        for(let i in product.colors){
            console.log(product.colors[i])
        }
        
        productColors.innerHTML = `${product.colors.map(function(color) {return colorOptionTemplate(color)}).join('')}` 
        /**Le NOMBRE de couleur est identifié mais le NOM de la couleur est "undefined" */
}
    )
}
getProduct();

//addeventlisterner sur la quantité du produit

let quantityInput = document.getElementById("quantity")
let quantityValue = quantityInput.value
console.log(quantityValue)

quantityInput.addEventListener('change', function (updateValue){
    quantityValue = updateValue.target.value
})

//array du produit selectionner par l'utilisateur

const addProductToCart = function (name, color, quantity) {    
    const productCart = {
        _id:getProductId(),
        color: productColors.options[productColors.selectedIndex].value,
        name: document.getElementById('title').textContent,
        price: document.getElementById('price').textContent,
        quantity: quantityValue,
        imageUrl: img.item(5).src,
        altTxt: img.item(5).alt,
    }
    return productCart;
}
addProductToCart()

//redirection vers le panier
const addToCart = document.getElementById("addToCart")
const popupConfirmation = function(){
    if(window.confirm(`${product.name} a été ajouté, passer la commande ?`)){
        window.location.href = "cart.html";
    }else{
        null
    }
}
/**Au clique envoyer les données choisis dans le local storage */
addToCart.addEventListener("click", (e)=> {
    e.preventDefault();
    addProductToCart();
    console.log(addProductToCart())
    
    let userProduct = JSON.parse(localStorage.getItem("product"));

    if(userProduct){        
        userProduct.push(addProductToCart());
        localStorage.setItem("product", JSON.stringify(userProduct));
        popupConfirmation();
    }else{
        userProduct = []
        userProduct.push(addProductToCart());
        localStorage.setItem("product", JSON.stringify(userProduct));
        popupConfirmation();
    }
    console.log(userProduct)
})