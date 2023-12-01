let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let products = document.querySelector('.products');
let close = document.querySelector('.close');

iconCart.addEventListener('click', ()=>{
    if (cart.style.right == '-100%') {
        cart.style.right = '0';
    } else {
        cart.style.right = '-100%';
        products.style.transform = 'translateX(0)';
    }
})

close.addEventListener('click', ()=>{
    cart.style.right = '-100%';
    products.style.transform = 'translateX(0)';
})