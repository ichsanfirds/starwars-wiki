import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styling.css"

export default function Characters() {
  const [dataChar, setDataChar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleFetchDataCharacters();
  }, []);

  const handleFetchDataCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://swapi.dev/api/people/");
      const dataCharJSON = await response.json();
      setDataChar(dataCharJSON.results);
    } catch (error) {
      alert("Fetch API Characters Gagal!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="Title">
        <h2>Characters</h2>
        <input type="text" className="" placeholder="Enter a Character Name" onChange={(event) => {setSearch(event.target.value)}} />
      </div>
      <div className="LoadingState">
        {loading && <div>Loading...</div>}
      </div>
      <div className="CardsContainer">
        {dataChar?.filter((chara) => {
            if (search == "") {
              return chara;
            } else if (
              chara.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return chara;
            }
          }).map((chara) => (
            <Link className="Cards" to={`/characters/${chara.url.substr(-2)}`} key={chara.url}>
              <h2>{chara.name}</h2>
              <p><b>Gender: </b>{chara.gender}</p>
              <p><b>Height: </b>{chara.height} cm</p>
              <p><b>Weight: </b>{chara.mass} kg</p>
              <p><b>Eye Color: </b>{chara.eye_color}</p>
              <p><b>Birth Year: </b>{chara.birth_year}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
