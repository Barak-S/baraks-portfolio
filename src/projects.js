export const projects = [
        {
            "img": "./images/MaxRefi.png", 
            "title": "Commercial Loan Calculator", 
            "description": [
                {
                    "intro": "Full Stack web application created for calculating commercial and residential property mortgages.",
                    "use": "Using react-router-dom, the calculator tab in the the nav bar takes the user to the real estate mortgage calculators. From there you can select from the dropdown to use either the “Multi-Family Max Refi” calculator for calculating multi family properties, or the “1-4 Family” property calculator.",
                    "show": "Loans are saved using a node.js server and a MongoDB database. All saved loans can be viewed in the “All Loans” tab in the nav bar. From here, users can click on a loan to be taken to the loan show page where a Google Maps API is integrated for a dynamic map and street view of the loan address. Users can also edit and update loan details."
                }
            ],
            "technologies": "React.js, Node.js, Express.js, MongoDB, Google Maps API",
            "live": "https://snco-calculator.vercel.app/",
            "details": [ 
                {
                    "img": "./images/LoanCalculator.png", 
                }, 
                { 
                    "img": "./images/Fix&Flip.png",
                },
                {
                    "img": "./images/AllLoans.png"
                },
                {
                    "img": "./images/LoanShow.png"
                },
                {
                    "img": "./images/LoanEdit.png"
                }
            ]
        },
        {
            "img": "./images/Covid1.png", 
            "title": "Covid-19 Data UI", 
            "description": [
                {
                    "intro": "React.js application for tracking and displaying the Covid-19 disease spread and news.",
                    "use" : " The Covid-19 data that is displayed in the app is from an ope-source Covid-19 API which can be found at 'https://covid2019-api.herokuapp.com/docs'.",
                    "show" : "By default, the data is displayed in descending order from most confirmed cases to least. Clicking or selecting on the table headers will dynamically re-render the results based on the title of the header. The search bar in the top left will also filter through countires based on the search query from the user."
                }
            ],
            "technologies": "React.js, open-source Covid-19 statistic API",
            "live": "https://covid-19-ui.now.sh/",
            "details": [ 
                {
                    "img": "./images/Covid2.png", 
                }, 
                { 
                    "img": "./images/Covid3.png",
                },
            ]
        },
        {
            "img": "./images/addmovie11.png", 
            "title": "What We Watchin'", 
            "description": [
                {
                    "intro": "React Native social media app where users can come together and share their recommendations of movies/Tv shows they would like to watch with friends.",
                    "use" : "The problem - How often do we find ourselves planning a movie night with friends and don’t know what to watch? We find ourselves scrolling for hours on Netflix or Hulu trying to find the right movie. By the time we pick something that looks half decent, the popcorn is all gone and everyone is already tired. A failed movie night.",
                    "show" : "The Solution - What We Watchin’ - A React Native social media app where users can come together and share movies or tv shows that they’d recommend, or want to watch soon. This app provides interaction with your friends by clicking on one’s profile and seeing what tv shows or movies they really enjoyed watching. My app can solve the issue of spending countless hours trying to find something to watch when planning a movie night."
                }
            ],
            "technologies": "React Native optimized for IOS and Android. Ruby on Rails MVC framework for creating a robust backend API server. PostgreSQL database for persisting user accounts, watch later playlists, and user friendships. OMDB API (Open Movie Database)",
            "details": [ 
                {
                    "img": "./images/addmovie11.png", 
                }, 
                { 
                    "img": "./images/addmovie11.png",
                }
            ]
        }, 
        {
            "img": "./images/CozyCabins1.png", 
            "title": "Cozy Cabins", 
            "description": [
                {
                    "intro": "Real Estate Application where users can list their homes for sale, and favorite other users listing for potential purchase.",
                    "use" : "",
                    "show" : ""
                }
            ],
            "technologies": "Ruby on Rails, SQLite3, Google Maps API",
            "details": [ 
                {
                    "img": "./images/CozyCabins2.png", 
                }, 
                { 
                    "img": "./images/CozyCabins3.png",
                }
            ]
        },
        {
            "img": "./images/PirateWars1.png", 
            "title": "Pirate Wars", 
            "description": [
                {
                    "intro": "JavaScript application game that models after the classic Battleship board game with its own unique touch in styling and gameplay.",
                    "use" : "",
                    "show" : ""
                }
            ],
            "technologies": "Ruby on Rails, JavaScript, PostgreSQL",
            "live": "http://pirate-wars.herokuapp.com/",
            "details": [ 
                {
                    "img": "./images/PirateWars2.png", 
                }, 
                { 
                    "img": "./images/PirateWars3.png",
                },
                { 
                    "img": "./images/PirateWars4.png",
                }
            ]
        }
    ]
