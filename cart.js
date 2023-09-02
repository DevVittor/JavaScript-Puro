const icon = document.getElementById('cart-icon');
const cart = document.getElementById('cart');
icon.addEventListener('click',()=>{
    if(cart.classList.contains('hidden')){
        cart.classList.remove('hidden');
        cart.classList.add('visible');
    }else{
        cart.classList.remove('visible');
        cart.classList.add('hidden');
    }
})