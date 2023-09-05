export interface Props {
    imdbID: string;
    Year: string;
    Poster: string;
    Title: string;
    Type: string;
}

const MovieCard = ({imdbID, Year, Poster, Title, Type}: Props) => {
    return (
        <div className="movie" key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>

            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title}/>
            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;