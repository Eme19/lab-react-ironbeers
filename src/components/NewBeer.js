import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./NewBeer.css";
import { Input } from "antd";

function AddnewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_leve, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const _id = uuidv4();
    const newBeer = {
      _id,
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_leve,
      contributed_by,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then(({ data }) => {
        console.log("what in there", data);
        navigate("/beers");
      });
  };

  return (
    <>
      <div className="nav-imag">
        <Link to="/">
          <img
            className="beer-nav-style"
            alt=""
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
          />
        </Link>
      </div>
      <div className="form-flex">
        <form onSubmit={handleSubmit}>
          <div className="inputstyle">
            <label>Name</label>
            <Input
              className="input-formstyle"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="inputstyle">
            <label>Tagline</label>
            <Input
              className="input-formstyle"
              type="text"
              name="tagline"
              onChange={(e) => setTagline(e.target.value)}
              value={tagline}
            />
          </div>

          <div className="inputstyle">
            <label>Description</label>
            <Input
              className="form-input-descr"
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>

          <div className="inputstyle">
            <label>First_brewed</label>
            <Input
              className="input-formstyle"
              type="text"
              name="first_brewed"
              onChange={(e) => setFirst_brewed(e.target.value)}
              value={first_brewed}
            />
          </div>

          <div className="inputstyle">
            <label>brewers_tips</label>
            <Input
              className="input-formstyle"
              type="text"
              name="brewers_tips"
              onChange={(e) => setBrewers_tips(e.target.value)}
              value={brewers_tips}
            />
          </div>

          <div className="inputstyle">
            <label>Attenuation_level</label>
            <Input
              className="input-formstyle"
              type="number"
              name="attenuation_leve"
              onChange={(e) => setAttenuation_level(e.target.value)}
              value={attenuation_leve}
            />
          </div>

          <div className="inputstyle">
            <label>Contributed_by</label>
            <Input
              className="input-formstyle"
              type="text"
              name="contributed_by"
              onChange={(e) => setContributed_by(e.target.value)}
              value={contributed_by}
            />
          </div>

          <div>
            <button className="btn-form" type="submit">
              ADD NEW
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddnewBeer;
