const apikey="Your Api Key"; //OMDB API key

//DOM elements
const searchBtn= document.getElementById("searchBtn");
const queryInput= document.getElementById("query");
const moviesContainer= document.getElementById("movies");

//event listener for search button
searchBtn.addEventListener("click",()=>{
    const searchTerm=queryInput.value.trim();
    if(searchTerm){
        fetchMovies(searchTerm);   //Will trigger fetch when input is valid
    }
});
/* FETCH LOGIC

   calls the omdb api search endpoint when user's search term
*/

async function fetchMovies(term){
    try{
        const res=await fetch(`http://www.omdbapi.com/?s=${term}&apikey=${apikey}`);
        const data =await res.json();
         
        //will handle successful responses
        if(data.Response ==="True"){     
            renderMovies(data.Search);
        
        }else{
            moviesContainer.innerHTML=`<p>No results found for "${term}".</p>`;  // when no movies found
        }
    }catch(err){  //Error handling for fetch failure results such as network,badkey etc;
        moviesContainer.innerHTML = `<p> Error Fetching data.please try again later.</p>`;
        console.error("fetch error",err);
    }
}
/* DOM Rendering functions
   Creates and displays movie cards from fetch data */
function renderMovies(movies){
    moviesContainer.innerHTML ="";  //will clear previous results
    movies.forEach(movie =>{
        const card = document.createElement("div");
        card.classList.add("movie-card");
        
        //fallback if poster is unavailable
        const poster = movie.Poster !== "N/A" ? movie.Poster:
        "https://via.placeholder.com/250x370?text=No+image";

        //inject card html
        card.innerHTML = `<img src="${poster}" alt ="${movie.Title}">
        <h3> ${movie.Title}</h3>
        <p>${movie.Year}</p>`;
         // adds click event to fetch full details
        card.addEventListener("click",()=> fetchMovieDetails(movie.imdbID));

        moviesContainer.appendChild(card);
    });
}
/* fetches full movie details using IMDB id
   */
async function fetchMovieDetails(imdbID){
    try{
        const res = await
        fetch(`https://www.omdbapi.com/?i=${imdbID}&apiKey=${apikey}`);
        const data = await res.json();
        if(data.Response==="True"){
            showModal(data);  //displays modal with details
        }
    }catch(err){
        console.error("Detail fetch error:",err);  // this will handle error
    }
}
/* Display modal with extra movie details such as 
   Genre,Runtime,Plot 
  */
function showModal(movie){
    const modal =  document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `<div class="modal-content">
        <span class="close">&times;</span>
        <h2>${movie.Title}</h2>
        <p><strong>Genre:</strong>${movie.Genre}</p>
        <p><strong>Runtime:</strong>${movie.Runtime}</p>
        <p><strong>Plot:</strong>${movie.Plot}</p>
    </div>`;
    document.body.appendChild(modal);
    
    //close modal on X click
    modal.querySelector(".close").addEventListener("click",()=>{
    modal.remove();
    });
      
    //closes model when clicking outside the modal box
    modal.addEventListener("click",(e) =>{
        if(e.target==modal){
            modal.remove();
        }
    });

}
