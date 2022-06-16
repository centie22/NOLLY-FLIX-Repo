console.log('hello there');



// likesEl.textContent = 56;
// let count = 0;
// function like() {
//     count+= 1
//         console.log(count)
//     likesEl.innerText = count
    
//     console.log('movie has been liked')
//     likeIcon.forEach(like())
// }



// let likesEl = document.querySelectorAll('.likes-number').forEach(likesEl => {
//     likesEl.addEventListener('click', like(){
//         
//     })
// })

// likeIcon.forEach(like-icon == {
// like-icon.addEventListener('click' , function  like(){
//     let count = 0
//     count += 1
//     console.log('button clicked', like());

// })
// })

let likesEl = document.querySelectorAll('.likes-number');
let likeIcon = document.querySelectorAll('.likeicon');
let priceTag = document.querySelector('#price-tag');


const movieData = {
    movieList : [
        {
            id : 0,
            title : "The Redemption"
        },
            {
                id : 1,
                title : "Africa's Tech Roots"
            },
            {
                id : 2,
                title : "The Invisible Man"
            },
            {
                id : 3,
                title : "The Complicated Project"
            },
            {
                id : 4,
                title : "Simply Javascript"
            },
            {
                id : 5,
                title : "The New Web"
            }
    ]
}
let count = 0
likeIcon.forEach (likeicon => {
        likeicon.addEventListener('click' , function like(){
        likesEl.values = parseInt(likesEl.values) + 1;
        
        console.log('button clicked')
    })
    })

    function like(){
        let count = 0
        count += 1
        // count +-1
        // let likeEl = likesEl.innerHTML = count
    }
    