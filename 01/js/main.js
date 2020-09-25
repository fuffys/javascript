

// var napdis = 'Hello';
let nadpis = document.getElementById('nadpis');
const zapati = document.querySelector('footer');
const minecraft = document.querySelector('img');


nadpis.addEventListener('click', function(){
    console.log('This is click');
    nadpis.innerHTML = 'Konečně pátek!';
    nadpis.style.fontSize = '10em';
    nadpis.style.color = 'blue';
    nadpis.classList.add('bg-success');
    nadpis.classList.remove('text-center');
    nadpis.classList.add('text-right');

});

zapati.addEventListener('mouseenter', function(){
    console.log('This is moveenter footer');
    zapati.style.backgroundColor = 'Red';
    zapati.style.color = 'White';
})
zapati.addEventListener('mouseleave', function(){
    console.log('This is moveleave footer');
    zapati.style.backgroundColor = 'White';
    zapati.style.color = 'Black';
})

minecraft.addEventListener('mouseenter', function(){
    console.log('This is moveenter minecraft');
    minecraft.src = 'img/hardcore.png';
    minecraft.width /=1,5;

})
minecraft.addEventListener('mouseleave', function(){
    console.log('This is moveenter minecraft');
    minecraft.src = 'img/survival.png';
    minecraft.width *=1,5;

})