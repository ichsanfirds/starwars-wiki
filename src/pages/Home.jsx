import { Link } from "react-router-dom";
import "./Home.css"

export default function Home() {
  return (
    <div className="HomeContainer">
      <div>
        Welcome to Star Wars Wiki! by Mochammad Ichsan Firdaus.
      </div>
      <div>
        Please Click <Link to='/characters'><b>Characters</b></Link>
      </div>
    </div>
  );
}
