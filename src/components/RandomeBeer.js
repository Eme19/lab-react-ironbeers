import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./RandomBeers.css";

function RandomBeers() {
  const [random, setRandom] = useState({});

  useEffect(() => {
    async function fetchRandomBeer() {
      try {
        let response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        setRandom(response.data);
      } catch (error) {
        console.log("errro during random check", error);
      }
    }
    fetchRandomBeer();
  }, []);

  const randomBeer = async () => {
    try {
      const randomIn = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      console.log(" show error ", randomIn.data);
      setRandom(randomIn.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="nav-imag">
        <Link to="/">
          <img
            className="beer-nav-style"
            alt=""
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
          />
        </Link>
      </div>
      <div className="beerDetails">
        <div>
          <img
            className="random-beer-img"
            alt={random.name}
            src={random.image_url}
          />
        </div>
        <h5>{random.name}</h5>
        <ul>
          <li id="liDetail">{random.attenuation_level}</li>
          <li>{random.first_brewed}</li>
          <li>{random.tagline}</li>
          <li>{random.description}</li>
          <li>
            <span>contributed_by: </span>
            {random.contributed_by}
          </li>
        </ul>
        <div>
          <button className="btn-random" onClick={randomBeer}>
            Select Randomly
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomBeers;
