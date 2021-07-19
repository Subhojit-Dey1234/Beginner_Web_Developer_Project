const left = document.querySelector('.scroll-left')
const right = document.querySelector('.scroll-right')
const container = document.querySelector('.container')
const images = document.querySelectorAll('.image-container img')
const imageContainer =  document.getElementsByClassName('image-container')

const container1 = document.querySelector('.container-1')

let counter = 1;
let value;
const size = images[0].clientWidth
value = -size*counter
container.style.transform = 'translateX('+(-size*counter)+'px)'

 
right.addEventListener('click',()=>{
    if(counter >= imageContainer.length - 1) return
    container.style.transition = "transform 0.4s ease-in-out";
    counter++;
    value = -size*counter
    container.style.transform = 'translateX('+(-size*counter)+'px)'
})
left.addEventListener('click',()=>{
    if(counter <=0) return;
    container.style.transition = "transform 0.4s ease-in-out";
    counter--;
    value = -size*counter
    container.style.transform = 'translateX('+(-size*counter)+'px)'
})

container.addEventListener('transitionend',()=>{
    if(imageContainer[counter].id === 'lastClone'){
        container.style.transition = 'none'
        counter = images.length -2
        container.style.transform = 'translateX('+(-size*counter)+'px)'
    }
    if(imageContainer[counter].id === 'firstClone'){
        container.style.transition = 'none'
        counter = 1
        container.style.transform = 'translateX('+(-size*counter)+'px)'
    }
})

var counterVal = 1
var circlBtns = document.querySelectorAll('.circle-btn')

circlBtns.forEach(event=>{
    event.addEventListener('click',()=>{
        for(var i=0;i<circlBtns.length;i++){
            circlBtns[i].style.backgroundColor ='transparent'
        }
        var i = parseInt(event.id)
        event.style.backgroundColor = 'black'
        value = - (size*counter)
        value1 = value + ((counter-i)*size)
        container.style.transition = "transform 0.4s ease-in-out";
        container.style.transform = 'translateX('+value1+'px)'
    })
})