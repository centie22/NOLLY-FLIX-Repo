console.log('hello there');


let likesEl = document.querySelector('.likes-number');
let priceTag = document.querySelector('#price-tag');

//likesEl.textContent = 56;
let count = 0;
function like() {
    count+= 1
    console.log(count)
    likesEl.innerText = count
    
    console.log('movie has been liked')
}
