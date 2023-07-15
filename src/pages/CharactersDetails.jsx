import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./StylingDetails.css"
import axios from 'axios'

export default function CharactersDetails() {
  const [dataCharDetail, setDataCharDetail] = useState(null);
  const { charID } = useParams();
  const [search, setSearch] = useState("");

  const handleFetchDataCharactersDetails = () => {
    fetch(`https://swapi.dev/api/people/${charID}`)
      .then((response) => response.json())
      .then((json) => setDataCharDetail(json));
  };

  useEffect(() => {
    handleFetchDataCharactersDetails();
  }, []);

  // console.log(dataCharFilm);

  return (
    <div className="Container">
      <h2>{dataCharDetail?.name.toUpperCase()}</h2>
      {/* 1 */}
      <div className="Name">
        <p></p>
      </div>
      {/* 2 */}
      <div className="Judul">
        <b>Gender</b>
      </div>
      <div className="Isi">
        <p>{dataCharDetail?.gender}</p>
      </div>
      {/* 3 */}
      <div className="Judul">
        <b>Height</b>
      </div>
      <div className="Isi">
        <p>{dataCharDetail?.height} cm</p>
      </div>
      {/* 4 */}
      <div className="Judul">
        <b>Weight</b>
      </div>
      <div className="Isi">
        <p>{dataCharDetail?.mass} kg</p>
      </div>
      {/* 5 */}
      <div className="Judul">
        <b>Birth Year</b>
      </div>
      <div className="Isi">
        <p>{dataCharDetail?.birth_year}</p>
      </div>
      {/* 6 */}
      <div className="Judul">
        <b>Hair Color</b>
      </div>
      <div className="Isi">
        <p>{dataCharDetail?.hair_color}</p>
      </div>
      {/* 7 */}
      <div className="Judul">
        <b>Skin Color</b>
      </div>
      <div className="Isi">
        <p>{dataCharDetail?.skin_color}</p>
      </div>
      <div className="Judul">
        <b>Film Appearance</b>
      </div>
      <div className="MovieList">
          {dataCharDetail?.films.map((CharactersFilm) => (
            <FilmChar key={CharactersFilm} url={CharactersFilm} />
          ))}
      </div>
      
    </div>
  );
}

const FilmChar = ( {url} ) => {
  const [characterFilm, setCharacterFilm] = useState(null)

  useEffect(() => {
    fetchCharacterFilm()
  }, [])

  const fetchCharacterFilm = async () => {
    try {
      const response = await axios.get(url);
      setCharacterFilm(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      {characterFilm && <p>{characterFilm.title}</p>}
    </div>
  )
}