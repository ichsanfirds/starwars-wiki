import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styling.css"

export default function Vehicles() {
  const [dataVehicle, setDataVehicle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleFetchDataVehicles();
  }, []);

  const handleFetchDataVehicles = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://swapi.dev/api/vehicles/");
      const dataStarVehiclesJSON = await response.json();
      setDataVehicle(dataStarVehiclesJSON.results);
    } catch (error) {
      alert("Fetch API Vehicles Gagal!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="Title">
        <h2>Vehicles</h2>
        <input type="text" className="" placeholder="Enter a Vehicles" onChange={(event) => {setSearch(event.target.value)}} />
      </div>
      <div className="LoadingState">
        {loading && <div>Loading...</div>}
      </div>
      <div className="CardsContainer">
        {dataVehicle?.filter((vhcle) => {
            if (search == "") {
              return vhcle;
            } else if (
                vhcle.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return vhcle;
            }
          }).map((vhcle) => (
            <Link className="Cards" key={vhcle.url}>
              <h2>{vhcle.name}</h2>
              <p><b>Model: </b>{vhcle.model}</p>
              <p><b>Manufacturer: </b>{vhcle.manufacturer}</p>
              <p><b>Crew: </b>{vhcle.crew}</p>
              <p><b>Passengers: </b>{vhcle.passengers}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
