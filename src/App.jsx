import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const API_URL = 'https://omdbapi.com?apikey=fc1fef96';

const DEFAULT_MOVIES = [
    {
        imdbID: '1',
        Title: 'Avatar the Last Airbender',
        Year: '12023',
        Poster: 'https://i.pinimg.com/736x/f7/fe/58/f7fe58e393fc8561251be86861c9b418.jpg',
    },
    {
        imdbID: '2',
        Title: 'Avatar',
        Year: '2023',
        Poster: 'https://i.pinimg.com/474x/4e/2c/91/4e2c91fd28b78bccb36b7048bf80f3aa.jpg',
    },
    {
        imdbID: '3',
        Title: 'Avengers: Infinity War',
        Year: '2019',
        Poster: 'https://i.pinimg.com/474x/83/d0/8c/83d08c728d0f96bf3c49c83fbd1931f5.jpg',
    },
    {
        imdbID: '4',
        Title: 'Black Panther',
        Year: '2023',
        Poster: 'https://i.pinimg.com/474x/41/10/1a/41101a9da1c162c354f60b1dc4ded6be.jpg',
    },
    {
        imdbID: '5',
        Title: 'Moana',
        Year: '2025',
        Poster: 'https://i.pinimg.com/474x/e1/0f/12/e10f128f1c91f7fe9f08c1485de293e1.jpg',
    },
    {
        imdbID: '6',
        Title: 'Inside Out',
        Year: '2024',
        Poster: 'https://i.pinimg.com/474x/6d/71/e7/6d71e72ccb7199f965f6b8106267a8e8.jpg',
    },
];

const App = () => {
    const [movies, setMovies] = useState(DEFAULT_MOVIES);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        if (title.length === 0) {
            setMovies(DEFAULT_MOVIES);
            return;
        }
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        if (data.Response === "True") {
            setMovies(data.Search);
        } else {
            setMovies([]);
        }
    };

    useEffect(() => {}, []);

    return (
        <div className="app">
            <h1> Faruq Hub</h1>
            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => {
                        const value = e.target.value;
                        setSearchTerm(value);
                        searchMovies(value);
                    }}
                />
                <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20230626112934/search.png"
                    alt="search icon"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
                )
            }
        </div>
    );
};

export default App;
