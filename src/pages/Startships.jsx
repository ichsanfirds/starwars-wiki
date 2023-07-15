import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styling.css"

export default function Starships() {
  const [dataStarship, setDataStarship] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleFetchDataStarships();
  }, []);

  const handleFetchDataStarships = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://swapi.dev/api/starships/");
      const dataStarShipsJSON = await response.json();
      setDataStarship(dataStarShipsJSON.results);
    } catch (error) {
      alert("Fetch API Starships Gagal!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="Title">
        <h2>Starships</h2>
        <input type="text" className="" placeholder="Enter a Starship" onChange={(event) => {setSearch(event.target.value)}} />
      </div>
      <div className="LoadingState">
        {loading && <div>Loading...</div>}
      </div>
      <div className="CardsContainer">
        {dataStarship?.filter((strshp) => {
            if (search == "") {
              return strshp;
            } else if (
                strshp.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return strshp;
            }
          }).map((strshp) => (
            <Link className="Cards" key={strshp.url}>
              <h2>{strshp.name}</h2>
              <p><b>Model: </b>{strshp.model}</p>
              <p><b>Manufacturer: </b>{strshp.manufacturer}</p>
              <p><b>Crew: </b>{strshp.crew}</p>
              <p><b>Passengers: </b>{strshp.passengers}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
