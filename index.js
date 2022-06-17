console.log('hello there');



let likesEl = document.querySelectorAll('.likes-number');
let likeIcon = document.querySelectorAll('.likeicon');
let priceTag = document.querySelector('#price-tag');


const movieData = {
    movieList : [
        {
            id : 0,
            title : "The Redemption",
            image : "./images/redemption-image.jpg",
            intro:" A damaged ex-special forces soldier navigating London's criminal underworld seizes an opportunity to assume another man's identity. Featuring the icon, Jason Statham.",
            price: 15,
            likes: 0
        },
            {
                id : 1,
                title : "Africa's Tech Roots",
                image : "./images/africa-digital-technology.webp",
                intro: "A movie taking us through Africa's technology roots and evolution ",
                price: 15,
            likes: 0
            },
            {
                id : 2,
                title : "The Invisible Man",
                image : "./images/the-invisible-man.jpg",
                intro: "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see. Featuring Elizabeth Moss, Harriet Dyer, Oliver Jackson-Cohen.",
                price: 15,
            likes: 0
            },
            {
                id : 3,
                title : "The Complicated Project",
                image : "./images/the-complicated-project.webp",
                intro: "Caught in the middle of making the right decision and the possible adverse implications, let's watch as these heroes try to save the state.",
                price: 15,
            likes: 0
            },
            {
                id : 4,
                title : "Simply Javascript",
                image:"./images/simply-javascript.png",
                intro: " Video teching for newbies to the world of coding to master JavaScript. Featuring te best in the programming world, this promises to be most helpful.",
                price: 15,
            likes: 0
            },
            {
                id : 5,
                title : "The New Web",
                image:"./images/the-new-web.png",
                intro: "We've seen the web grow over the years and now it has evolved into Web 3.0. This movie explain all that this new web is all about. ",
                price: 15,
            likes: 0
            }
    ],
    favMovie: []
}
let movieDom = []
const movies = document.getElementById('moviecontainer')
function updateMovie(el, hideLike=false){
    const {title, image, id,intro, likes, price}= el
    console.log(hideLike)
    const elements = `<div class="movie-list">
            <div><img class="movie-list-image" src=${image} alt="">
            </div>
            <span class="movie-list-title">${title}</span>
            <p class="movie-list-intro">${intro}</p>
            <button class="movie-list-button">Watch</button>
            ${hideLike? "" :`<span class="like-area">
                <span class="likes-number" data-id=${id}>${likes}</span>
                <i class="like-icon fa-solid fa-thumbs-up likeicon" onclick=like(${id}) ></i>
                
            </span> `}
            
        </div>`
    return elements
}


const initMovie = (data, edit)=>{
    if (edit){
            movieDom=[]
        }
    data.forEach((i)=>{
        const movie = updateMovie(i)
        
            movieDom.push(movie)
        
        
    })
    movies.innerHTML= movieDom.join('')
}
initMovie(movieData.movieList  )

    function like(id){
        
//         
    const currentData = movieData.movieList.map((movie)=>{
        
        const currentMovie = movie.id== id? movie.likes +1:movie.likes
        return{
            ...movie,
            likes:currentMovie
        }
    })
    movieData.movieList = currentData
    initMovie(currentData,true)
    if (movieData.favMovie.indexOf(id)==! -1){
        return
    }
    movieData.favMovie.push(id)
    initFavMovie(id, currentData)
    }

    const favBlock = document.getElementById('trending')

    const emptyDomFave=[]
    
    
    const updateFavMovie = (newEl) =>{
    const el = updateMovie(newEl, true)
    emptyDomFave.push(el)
    const joined = emptyDomFave.join("")
    favBlock.innerHTML = joined
    }
    
    const {moviecontainer, trending} = movieData
    
    const emptyDom = []
    

const joined = emptyDom.join("")

    
    const initFavMovie = (el, movieList) =>{
        const currentMovie = movieList.find(i=>i.id ==+el)
        updateFavMovie(currentMovie)
    }
    


