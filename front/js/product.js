
const productImg = document.querySelector('.item_img')

function getId(parameterName){
    let parameters = new URLSearchParams( window.location.search )
    return parameters.get(parameterName)
    
}

getId("id")
console.log(getId(parameterName))

const getProducts = function() {
fetch('http://localhost:3000/api/products')
    .then(function(response){
        return response.json()
    })
    .then(function (data) {
        let products = data;

    })
}

