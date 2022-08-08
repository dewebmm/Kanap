
let userProduct = JSON.parse(localStorage.getItem("product"))
let cart__items = document.getElementById("cart__items")
let userCart = [] 
function myFunction(userProduct){
  console.log(userProduct)
}
function duplicationManagement(){for(let x=0; x<userProduct.length; x++){    
      for(let y=0; y<userProduct.length; y++){
        if(x !== y){
          if(userProduct[x].name === userProduct[y].name){
            if(userProduct[x].color === userProduct[y].color){
              userProduct[x].quantity = Number(userProduct[x].quantity) + Number(userProduct[y].quantity)
              userProduct.splice(y,1)
              console.log(userProduct)
              localStorage.setItem("product", JSON.stringify(userProduct))
            }
          }
        }
      }
    }
  }
duplicationManagement()
//S'il n'y a rien dans le storage affiché panier vide
function updateCart(){
  if(userProduct === 0){
  cart__items.innerHTML = `<div>
  <p>Le panier est vide</p>
  </div>`

}else{
  //s'il y a des produits dans le storage, implémenté x nombre de fois ce code html en fonction de l'index du storage
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
                    <p>${userProduct[i].price}€</p>
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
    cart__items.innerHTML = userCart
  }
}
}
updateCart()
// quand la quantité est = 0 retirer du panier
let productQuantity = document.getElementsByClassName("itemQuantity")
console.log(productQuantity[1].value)

for(let q in productQuantity){
  productQuantity[q].addEventListener('change', (valueChange) => {
  console.log(productQuantity[q].value)
})}

//suppression des duplique

function removeNullQuantity(){
  for(let q=0; q<userProduct.length; q++){    
    if(userProduct[q].quantity === '0'){
      userProduct.splice(q,1)
            console.log(userProduct)
            localStorage.setItem("product", JSON.stringify(userProduct))
            updateCart()
    }
  }
}
removeNullQuantity()
/**supprimer article */
//selectionner l'element qui declenchera la suppression
let deleteItem = document.querySelectorAll('.deleteItem')

console.log(deleteItem);
//boucle tout les objet de l'array puis au "click" supprimer l'article

for(let j = 0; j < deleteItem.length; j++){
  deleteItem[j].addEventListener("click", (e)=> {
    console.log(j)
    
    userProduct.splice(j,1)
    console.log(userProduct)
    
    //puis renvoi vers le localstorage
    localStorage.setItem("product", JSON.stringify(userProduct))
    window.location.reload()
    
  })
}


// formulaire 
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
  return /^[A-Za-z]{3,20}$/.test(value)
}
const controlAddress = function(value){
  return /^[0-9a-zA-Z]$/.test(value)
}
const controlEmail = function(value){
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
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



