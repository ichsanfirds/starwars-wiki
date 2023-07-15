import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styling.css"

export default function Species() {
  const [dataSpecies, setDataSpecies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleFetchDataSpecies();
  }, []);

  const handleFetchDataSpecies = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://swapi.dev/api/species/");
      const dataSpeciesJSON = await response.json();
      setDataSpecies(dataSpeciesJSON.results);
    } catch (error) {
      alert("Fetch API Species Gagal!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="Title">
        <h2>Planets</h2>
        <input type="text" className="" placeholder="Enter a Species" onChange={(event) => {setSearch(event.target.value)}} />
      </div>
      <div className="LoadingState">
        {loading && <div>Loading...</div>}
      </div>
      <div className="CardsContainer">
        {dataSpecies?.filter((spces) => {
            if (search == "") {
              return spces;
            } else if (
                spces.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return spces;
            }
          }).map((spces) => (
            <Link className="Cards" key={spces.url}>
              <h2>{spces.name}</h2>
              <p><b>Classification: </b>{spces.classification}</p>
              <p><b>Designation: </b>{spces.designation}</p>
              <p><b>Language: </b>{spces.language}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
