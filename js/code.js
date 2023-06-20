// Seleccionar el botón y la tarjeta
const btnContacto = document.getElementById('btnContacto');
const btnRegresar=document.getElementById('btnRegresar');
const btnEXP=document.getElementById('btnEXP');
const btnEXPR=document.getElementById('btnEXPR');
const btnPor=document.getElementById('btnPor');
const btnWhatsapp = document.getElementById('gmail');
const btnGmail = document.getElementById('whatsapp');
const btnLlamar = document.getElementById('llamar');


// Agregar evento de escucha al botón
btnContacto.addEventListener('click', () => {
    const cart = document.querySelector('.cart');
    const cart2 = document.querySelector('.cartContact');

  // Alternar la clase 'rotate' en la tarjeta
  cart.classList.toggle('rotate');
  cart2.classList.toggle('rotate2');

  

  
});

function volter(){
    const cartt = document.querySelector('.cart');
    const cartt2 = document.querySelector('.cartContact');
 
    cartt.classList.remove('rotate');
    cartt2.classList.remove('rotate2');
    
}

function whatsapp(){
    window.open("https://www.whatsapp.com/?lang=es");
}
function gmail(){
    const formulario= document.querySelector('.form');
    const cartf = document.querySelector('.cart');
    const cart2f = document.querySelector('.cartContact');
    
    cartf.classList.toggle('outVisual');
    cart2f.classList.toggle('outVisual');
    formulario.classList.toggle('formVis');
    
  

}


btnEXP.addEventListener('click',() =>{
    const carttp = document.querySelector('.cart');
    const cart3 = document.querySelector('.EXP');


    cart3.classList.toggle('rotate2');
    carttp.classList.toggle('rotate');

});

btnPor.addEventListener('click',()=>{
    const cartp = document.querySelector('.cart');
    const port = document.querySelector('.portafolio');

    port.classList.toggle('rotate2');
    cartp.classList.toggle('rotate');


});

function remove(){
    const cartt3 = document.querySelector('.cart');
    const cart3 = document.querySelector('.EXP');

    cart3.classList.remove('rotate2');
    cartt3.classList.remove('rotate')
}
function removeP(){
    const cartp = document.querySelector('.cart');
    const portt = document.querySelector('.portafolio');
    portt.classList.remove('rotate2');
    cartp.classList.remove('rotate');
}




