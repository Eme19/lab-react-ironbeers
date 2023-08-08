import {Link} from 'react-router-dom';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

function AddnewBeer(){

const [name, setName] = useState("")
const [tagline, setTagline] = useState("")
const [description, setDescription] = useState("")
const [first_brewed, setFirst_brewed] = useState("")
const [brewers_tips , setBrewers_tips ] = useState("")
const [attenuation_leve, setAttenuation_level] = useState(0)
const [contributed_by, setContributed_by] = useState("")

const navigate = useNavigate();

const handleSubmit = e => {
    e.preventDefault();

    const _id = uuidv4()
    const newBeer= {
        _id,
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_leve,
        contributed_by
    }
   axios.post('https://ih-beers-api2.herokuapp.com/beers/new',newBeer )
  .then(({data}) => {
   console.log('what in there', data)
     navigate('/beers')
  })
}




    return(
        <>
         <div className="nav-imag">
       <Link to="/"><img className="beer-nav-style" alt="" src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" /></Link>
        </div>
        <div>
            <h3>Add New Beer</h3>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
                value={name}/>


              <label>Tagline</label>
                <input 
                type="text"
                name="tagline"
                onChange={e => setTagline(e.target.value)}
                value={tagline}/>



              <label>Description</label>
                <input 
                type="text"
                name="description"
                onChange={e => setDescription(e.target.value)}
                value={description}/>



              <label>First_brewed</label>
                <input 
                type="text"
                name="first_brewed"
                onChange={e => setFirst_brewed(e.target.value)}
                value={first_brewed}/>


             <label>brewers_tips</label>
                <input 
                type="text"
                name="brewers_tips"
                onChange={e => setBrewers_tips(e.target.value)}
                value={brewers_tips}/>




              <label>Attenuation_level</label>
                <input 
                type="number"
                name="attenuation_leve"
                onChange={e => setAttenuation_level(e.target.value)}
                value={attenuation_leve}/>


                

              <label>Contributed_by</label>
                <input 
                type="text"
                name="contributed_by"
                onChange={e => setContributed_by(e.target.value)}
                value={contributed_by}/>

            <button type="submit">Add Beer</button>

            </form>
        </div>
       </>

    )
}

export default AddnewBeer