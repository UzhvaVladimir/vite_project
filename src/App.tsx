import UserListGroup from "./components/UserListGroup" ;
import MovieCard from "./components/MovieCard";
import {PropsWithChildren, useEffect, useState} from "react";
import SearchIcon from "./search.svg";
import {Props} from "./components/MovieCard"

const API_URL = "http://www.omdbapi.com?apikey=2773c814";

function App() {
    let items = [
        'Элемент номер 1',
        'Элемент номер 2',
        'Элемент номер 3',
        'Элемент номер 4',
        'Элемент номер 5'
    ];
    items = [];

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies("Batman");
    }, []);

    const handleSelectItem = (item: string) => {
        console.log(item);
    }
    const searchMovies = async (title: string) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search)
    }

    return (
        <>
            <div>
                <UserListGroup items={items} heading="Выберите элемент" onSelectItem={handleSelectItem}/>
            </div>

            <div className="app">
                <h1>MovieLand</h1>

                <div className="search">
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for movies"
                    />
                    <img
                        src={SearchIcon}
                        alt="search"
                        onClick={() => searchMovies(searchTerm)}
                    />
                </div>

                {movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie: Props) => (
                            <MovieCard imdbID={movie.imdbID} Poster={movie.Poster} Title={movie.Title} Type={movie.Type}
                                       Year={movie.Year}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
            </div>
        </>
    )
}

export default App;
