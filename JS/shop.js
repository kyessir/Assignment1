let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let productsShowcase = document.querySelector('.products');
let close = document.querySelector('.close');

iconCart.addEventListener('click', ()=>{
    if (cart.style.right == '-100%') {
        cart.style.right = '0';
    } else {
        cart.style.right = '-100%';
        productsShowcase.style.transform = 'translateX(0)';
    }
})

close.addEventListener('click', ()=>{
    cart.style.right = '-100%';
    productsShowcase.style.transform = 'translateX(0)';
})

let products = null;
//get data from json file
fetch('products.json')
.then(response => response.json())
.then(data => {
    products = data;
    addDataToHTML();
})

//show data in list
function addDataToHTML(){
    //remove data default to HTML
    let wrapperHTML = document.querySelector('.products-slider');
    wrapperHTML.innerHTML = '';

    //add new data
    if(products != null){
        products.forEach(product =>{
            let newProduct = document.createElement('div');
            newProduct.classList.add('wrapper');
            newProduct.innerHTML = 
            '<img src="${product.image}"> <h3>${product.name}</h3> <div class = "price">${$product.price}</div> <button onclick="addCart(${product.id})>add to cart</button>';
            listProductHTML.appendChild(newProduct);
        })
    }
}