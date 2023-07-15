import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styling.css"

export default function Planets() {
  const [dataPlanet, setDataPlanet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleFetchDataPlanets();
  }, []);

  const handleFetchDataPlanets = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://swapi.dev/api/planets/");
      const dataPlanetJSON = await response.json();
      setDataPlanet(dataPlanetJSON.results);
    } catch (error) {
      alert("Fetch API Planets Gagal!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="Title">
        <h2>Planets</h2>
        <input type="text" className="" placeholder="Enter a Planet Name" onChange={(event) => {setSearch(event.target.value)}} />
      </div>
      <div className="LoadingState">
        {loading && <div>Loading...</div>}
      </div>
      <div className="CardsContainer">
        {dataPlanet?.filter((plnt) => {
            if (search == "") {
              return plnt;
            } else if (
                plnt.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return plnt;
            }
          }).map((plnt) => (
            <Link className="Cards" key={plnt.url}>
              <h2>{plnt.name}</h2>
              <p><b>Rotation Period: </b>{plnt.rotation_period} hrs</p>
              <p><b>Orbital Period: </b>{plnt.orbital_period} days</p>
              <p><b>Diameter: </b>{plnt.diameter} km</p>
              <p><b>Climate: </b>{plnt.climate}</p>
              <p><b>Gravity: </b>{plnt.gravity}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
