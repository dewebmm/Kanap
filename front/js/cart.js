
let userProduct = JSON.parse(localStorage.getItem("product"))
let cart__items = document.getElementById("cart__items")
let cart__item = document.getElementsByClassName("cart__item")
let userCart = []
function myFunction(userProduct){
  console.log(userProduct)
}

//suppression des duplique dans l'array avant injection HTML et incrementation du doublon a l'element qui restera
function duplicationManagement(){for(let x=0; x<userProduct.length; x++){    
      for(let y=0; y<userProduct.length; y++){
        if(x !== y){
          if(userProduct[x].name === userProduct[y].name){
            if(userProduct[x].color === userProduct[y].color){
              userProduct[x].quantity = Number(userProduct[x].quantity) + Number(userProduct[y].quantity)                  
              userProduct.splice(y,1)           
              localStorage.setItem("product", JSON.stringify(userProduct))
              
            }
          }
        }
      }
    }
  }
duplicationManagement()
//recuperation du prix depuis l'api


// fonction pour afficher les produits dans le panier
function showToCart(){
  //S'il n'y a rien dans le storage affiché panier vide
  if(userProduct === 0){
  cart__items.innerHTML = `<div>
  <p>Le panier est vide</p>
  </div>`
}else{
  //s'il y a des produits dans le storage, injecter x nombre de fois ce code html en fonction de l'index du storage
  for(i = 0; i <  userProduct.length; i++){
    userCart = userCart + `
            <article class="cart__item" data-id="${userProduct[i]._id}" data-color="${userProduct[i].color}">
                <div class="cart__item__img">
                  <img src="${userProduct[i].imageUrl}" alt="${userProduct[i].altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${userProduct[i].name}</h2>
                    <p>${userProduct[i].color}</p>
                    <p></p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${userProduct[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`;
              
  }if(i === userProduct.length){
    //injection dans l'html
    cart__items.innerHTML = userCart
    }
  }
}
showToCart()

// ******************modification de la quantité dynamique avec le local storage
//cible l element contenant la quantité
let productQuantity = document.getElementsByClassName("itemQuantity")
/**  conversion de l'htmlcollection des element html en array simple sur lequel je loop les quantités
 puis ajout d'addeventlistener 'change' */
for(let q in Array.from(productQuantity)){
  productQuantity[q].addEventListener('change', (valueChange) => {
    //recuperation de la valeur des quantités changer
    let productQuantityValue = productQuantity[q].value
    productQuantityValue = valueChange.target.value
    // si la valeur change, mis a jour du local storage 
    if(userProduct[q].quantity !== productQuantityValue){
      userProduct[q].quantity = productQuantityValue
      localStorage.setItem("product", JSON.stringify(userProduct))
      //si quantité = 0 alors suppression de l'elem dans l' html, dans l'arry pour le storage aussi
  }if(userProduct[q].quantity === '0'){      
      userProduct.splice(q,1)                
      localStorage.setItem("product", JSON.stringify(userProduct))
      cart__item[q].remove()
    }      
})
}
//*****************************************insertion des prix depuis l'api****************************************** */

let productPrice = document.getElementsByClassName("cart__item__content__description")
productPrice = Array.from(productPrice)
function fetchPrice(){
      // chaque element present dans l'html
        Array.from(cart__item).forEach((element, index) => {
        //fetch les données de l'id recuperer sur l'element
        fetch('http://localhost:3000/api/products/' + element.dataset.id)
        //conversion en json
        .then(function(response){
            return response.json()
        }).then(function (data) {
          //si l'id de l'element est === l'id dans l'api 
          if(element.dataset.id === data._id){
            //alors injecter le prix de l'api dans l'html de l'element
            productPrice[index].lastElementChild.innerHTML = data.price
            let priceQuantity = Number(productPrice[index].lastElementChild.innerHTML) * userProduct[index].quantity
            console.log(priceQuantity)
            //console.log(Number(productPrice[index].lastElementChild.innerHTML))
          }
        })
      })}

fetchPrice()
let totalQuantity = document.getElementById('totalQuantity')
let totalPrice = document.getElementById('totalPrice')
totalQuantity.innerHTML = '21'
totalPrice.innerHTML = ''
console.log(totalQuantity)
console.log(totalPrice)

function addition(elementNumber){
  elementNumber = Number(elementNumber)
  let totalPrice = 0;
  console.log(elementNumber)
  for(let t in elementNumber){
    totalPrice += elementNumber
    console.log(totalPrice)
  }
}
/**<div class="cart__price">
              <p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span> €</p>
            </div> */



/****************************** Bouton supprimer article */
//selectionner l'element qui declenchera la suppression
let deleteItem = document.querySelectorAll('.deleteItem')

//boucle les elem "supprimer" de l'elem puis au "click" du btn supprimer l'article du tableau et du storage et de l'html
for(let j = 0; j < deleteItem.length; j++){
  deleteItem[j].addEventListener("click", (e)=> {    
    userProduct.splice(j,1)
    localStorage.setItem("product", JSON.stringify(userProduct))
    cart__item[j].remove()
    
  })
}

//**************************************** */ formulaire 
// addeventlistener sur le bouton du commander
const orderBtn = document.getElementById('order')

orderBtn.addEventListener("click", ()=>{

const formulaire = {
  firstName: document.getElementById('firstName').value,
  lastName: document.getElementById('lastName').value,
  address: document.getElementById('address').value,
  city: document.getElementById('city').value,
  email: document.getElementById('email').value
}

//Control du formulaire 
//variable d'une fonction pour verifier les données saisie pour caractere uniquement
const controlFormNameCity = function(value){
  return /^[A-Za-z]{3,20}$/
}
const controlAddress = function(value){
  return /^[0-9a-zA-Z]$/
}
const controlEmail = function(value){
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
}


function firstNameTest(){
  const firstName = formulaire.firstName

  if(controlFormNameCity(firstName)){
    return true
  }else{
    document.getElementById('firstNameErrorMsg').innerHTML = "Veuillez saisir entre 3 et 20 caractères."
    return false  
  }
}

function lastNameTest(){
   const lastName = formulaire.lastName
  if(controlFormNameCity(lastName)){
    return true
  }else{
    document.getElementById('lastNameErrorMsg').innerHTML = "Veuillez saisir entre 3 et 20 caractères."
    return false  
  }
}

function emailTest(){
   const email = formulaire.email

  if(controlEmail(email)){
    return true
  }else{
    document.getElementById('emailErrorMsg').innerHTML = "veuillez respecter le format xyz@email.xyz"
    return false  
  }
}

if(firstNameTest() && lastNameTest() && emailTest()){
  localStorage.setItem("formulaire", JSON.stringify(formulaire))

}else{
  alert("Erreur envoi : Données saisie incorrect")
}

console.log(formulaire)
console.log(localStorage)

const submitOrder = {userProduct, formulaire}
console.log(submitOrder)
})



