# Movie-application

# Movie Search App

A simple movie search app using the OMDb API.

## 🔗 Endpoints Used
- `https://www.omdbapi.com/?s={SEARCH_TERM}&apikey=YOUR_API_KEY` - To fetch movie results based on a search term.
- `https://www.omdbapi.com/?i={IMDB_ID}&apikey={YOUR_API_KEY}`  - Used when a user clicks a movie card to view more info.

You can get a free API key by signing up at: [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)

## Setup
 **Clone the repo**
   `git clone https://github.com/your-username/movie-search-app.git`
 **Navigate into the folder**
   `cd movie-search-app`
 **Insert your API key**
  Open app.js
  Replace this line: 
        const apiKey = "Your api key"; with your actual api key (eg:9dd45758)
 **Run it**
   Open index.html in your browser (double-click or use VS Code Live Server)


## 🧑‍💻 Usage
- Enter a movie name in the input field.
- Click "Search" to view matching results with posters and release years.
- Click the "Movies" to view the imdb data(Genre,Plot,Runtime) in the movies

## ⚠️ Challenges
- Handled missing poster images using placeholders.
- Managed network or API errors with user-friendly messages.

##Responsive Design
  The Layout adjusts based on the screen

## 🌐 Tested On
- Google Chrome
- Mozilla Firefox
