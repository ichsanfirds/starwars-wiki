import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styling.css"

export default function Films() {
  const [dataFilm, setDataFilm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleFetchDataFilms();
  }, []);

  const handleFetchDataFilms = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://swapi.dev/api/films/");
      const dataFilmJSON = await response.json();
      setDataFilm(dataFilmJSON.results);
    } catch (error) {
      alert("Fetch API Film Gagal!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="Title">
        <h2>Films</h2>
        <input type="text" className="" placeholder="Enter a Film Title" onChange={(event) => {setSearch(event.target.value)}} />
      </div>
      <div className="LoadingState">
        {loading && <div>Loading...</div>}
      </div>
      <div className="CardsContainer">
        {dataFilm?.filter((movie) => {
            if (search == "") {
              return movie;
            } else if (
                movie.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return movie;
            }
          }).map((movie) => (
            <Link className="Cards" key={movie.url}>
              <h2>{movie.title}</h2>
              <p><b>Director: </b>{movie.director}</p>
              <p><b>Producer: </b>{movie.producer}</p>
              <p><b>Release Date: </b>{movie.release_date}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
