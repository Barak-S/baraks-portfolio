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
            "img": "./images/Covid.png", 
            "title": "Covid-19 Data UI", 
            "description": [
                { 
                    "intro": "React.js application for tracking and displaying the Covid-19 disease spread and news.",
                    "use" : " The Covid-19 data that is displayed in the app is from an ope-source Covid-19 API which can be found at 'https://covid2019-api.herokuapp.com/docs'.",
                    "show" : ""
                }
            ],
            "technologies": "React.js, open-source Covid-19 statistic API",
            "live": "https://covid-19-ui.now.sh/",
            "details": [ 
                {
                    "img": "./images/Covid.png", 
                }, 
                { 
                    "img": "./images/Covid.png",
                }
            ]
        }, 
        {
            "img": "./images/addmovie11.png", 
            "title": "What We Watchin'", 
            "description": [
                {
                    "intro": "React Native social media app where users can come together and share their recommendations of movies/Tv shows they would like to watch with friends.",
                    "use" : "",
                    "show" : ""
                }
            ],
            "technologies": "React Native, Ruby On Rails, PostgreSQL, OMDB API (Open Movie Database)",
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
            "img": "./images/cozyCabins.png", 
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
                    "img": "./images/cozyCabins.png", 
                }, 
                { 
                    "img": "./images/cozyCabins.png",
                }
            ]
        },
        {
            "img": "./images/pirateWarsGame.png", 
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
                    "img": "./images/pirateWarsGame.png", 
                }, 
                { 
                    "img": "./images/pirateWarsGame.png",
                }
            ]
        }
    ]
