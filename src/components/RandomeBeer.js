
import {Link} from 'react-router-dom';
import { useEffect , useState } from 'react';
import axios  from 'axios'
import './RandomBeers.css'


function RandomBeers(){
    const [random, setRandom] = useState({})


useEffect(()=> {
    async function fetchRandomBeer(){
        try {
           let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            setRandom(response.data)
        }catch(error){
            console.log('errro during random check', error)
        }
    } 
    fetchRandomBeer()

},[])



const randomBeer = async () => {
    
    try{
        const randomIn = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        console.log(" show error ",randomIn.data)
        setRandom(randomIn.data);
    }catch(error){
        console.log(error)

    }
    
};


    return(
        <>
         <div >
            <div className="nav-imag">
            <Link to="/">
            <img className="beer-nav-style"alt="" src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"  />
            </Link>
            </div>
           
            <img alt={random.name} src={random.image_url} height={100}/>
            <h5>{random.name}</h5>
            <ul>
                <li><span>tagline: </span>{random.tagline}</li>
                <li><span>first_brewed: </span>{random.first_brewed}</li>
                <li><span>attenuation_level:</span>{random.attenuation_level}</li>
                <li><span>description:</span>{random.description}</li>
                <li><span>contributed_by: </span>{random.contributed_by}</li>
                
            </ul>
            <button onClick={randomBeer}>Check Randomly</button>
            
        </div>
        </>
    )
}

export default RandomBeers