const API_KEY = "api_key=35f5e77c6f4deaf531ee2c27fff40aea";
const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const genres = [
    {
       "id":28,
       "name":"Action"
    },
    {
       "id":12,
       "name":"Adventure"
    },
    {
       "id":16,
       "name":"Animation"
    },
    {
       "id":35,
       "name":"Comedy"
    },
    {
       "id":80,
       "name":"Crime"
    },
    {
       "id":99,
       "name":"Documentary"
    },
    {
       "id":18,
       "name":"Drama"
    },
    {
       "id":10751,
       "name":"Family"
    },
    {
       "id":14,
       "name":"Fantasy"
    },
    {
       "id":36,
       "name":"History"
    },
    {
       "id":27,
       "name":"Horror"
    },
    {
       "id":10402,
       "name":"Music"
    },
    {
       "id":9648,
       "name":"Mystery"
    },
    {
       "id":10749,
       "name":"Romance"
    },
    {
       "id":878,
       "name":"Science Fiction"
    },
    {
       "id":10770,
       "name":"TV Movie"
    },
    {
       "id":53,
       "name":"Thriller"
    },
    {
       "id":10752,
       "name":"War"
    },
    {
       "id":37,
       "name":"Western"
    }
 ]

const main1 = document.getElementById('template-news');



getMovie(SEARCH_URL);

function getMovie(url)
{
    fetch(url).then(res => res.json()).then(data =>{
        
        console.log(data);
        bindData(data.results);
    })
}

function bindData(data){
    main1.innerHTML = '';
    data.forEach(movie =>{
        const {title,poster_path,vote_average
            ,overview} = movie; 
       const movielist= document.createElement('div')
       movielist.classList.add('movie')
       movielist.innerHTML = `
       <div class="card-header">
       <img src="${IMAGE_URL+poster_path}" alt="cat" id="news-img">          
     </div>
     <div class="card-content">
     <h3 id="news-title">${title}</h3>
     <div class="title-source">
       <h6 id="${getcolor(vote_average)}">${vote_average}</h6>
       </div>
       <div class="overview">
       <p id="short">${overview}</p>
       </div>
     </div>
     ` 

     main1.appendChild(movielist);
    })
}

function getcolor(vote)
{
    if(vote>=8){
        return 'news-source'
    }else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }

}

