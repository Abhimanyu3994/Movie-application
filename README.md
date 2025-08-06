# Movie-application

A simple movie search app using the OMDb API.

## 🔗 Endpoints Used
- `https://www.omdbapi.com/?s={SEARCH_TERM}&apikey=YOUR_API_KEY` - To fetch movie results based on a search term.
- `https://www.omdbapi.com/?i={IMDB_ID}&apikey={YOUR_API_KEY}`  - Used when a user clicks a movie card to view more info.

You can get a free API key by signing up at: [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)

## Setup
 **Clone the repo**
   ```bash
      git clone https://github.com/Abhimanyu3994/movie-application.git
   ```
 **Navigate into the folder**
   ```bash
      cd movie-application
   ```
 **Insert your API key**
  Open app.js
  Replace this line: 
        ```bash 
        const apiKey = "Your api key";
        ```
         with your actual api key (eg:9dd45758)
 **Run it**
   Open `index.html` in your browser (double-click or use VS Code Live Server)


## 🧑‍💻 Usage
- Enter a movie name in the input field.
- Click "Search" to view matching results with posters and release years.
- Click the "Movies" to view the imdb data(Genre,Plot,Runtime) in the movies

## Responsive Design
The Layout adjusts based on the screen
 - Mobile:1 column
 - Tablet/Desktop:2-3 columns
   Cards and buttons have hover/focus styles for a smoother experience, and everything is easy to read thanks to thoughtful spacing and typography.

## Features
 - Live movie search via OMDb API
 -Image fallback for missing posters
 -Modal popup with movie details
 -Fully responsive layout
 -Responsive handling (no results, network issues)

## 🌐 Tested On
- Google Chrome
- Mozilla Firefox

## ⚠️ Challenges
- Footer not sticking to bottom: Solved with Flexbox layout on body and min-height logic
- Missing posters from API: Replaced with a clean placeholder image
- Responsive grid layout: Used auto-fit and minmax() in CSS Grid for full responsiveness

## ScreenShots
  **Home Screen**
  <img width="1364" height="680" alt="Screenshot 2025-08-06 104817" src="https://github.com/user-attachments/assets/5f1a6816-6ebd-4811-b4cb-0afdf2ff0c78" />
  **Search Results**
<img width="1365" height="630" alt="Screenshot 2025-08-06 104838" src="https://github.com/user-attachments/assets/d1baa446-1fa2-4094-988d-9518213b1705" />
  **Movie Info**
 <img width="1365" height="642" alt="Screenshot 2025-08-06 104848" src="https://github.com/user-attachments/assets/6988df21-8a3c-491d-92e8-67b85ac653df" />

## 👨‍💻 Created by
**Abhimanyu S O**
Aspiring full-stack developer | Frontend + Database enthusiast
