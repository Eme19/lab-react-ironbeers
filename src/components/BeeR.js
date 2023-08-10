import axios from "axios"
import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import SearchBeer from "./SearchBeer"



function Beer(){
    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(true)

    

   

    const SearChBeersHandler = e => {
        const searchResult = [...beers].filter((items)=>{
            return items.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setBeers(searchResult)
        }
        





    useEffect(()=>{
        
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response =>{
            setBeers(response.data)
            setLoading(false)
        }))

    }, [])

    return(

        
        <>

         <div className="nav-imag">
       <Link  to="/"><img className="beer-nav-style" alt="" src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" /></Link>
        </div>
        {loading ? <p>isLoading...</p> :
        <div>

              <SearchBeer SearChBeersHandler={SearChBeersHandler}/>
    
            
            {beers.map((beer)=> (
                <div className="beer-flex" key={beer._id}>
                    <Link className="link-stye"  to={`/beers/${beer._id}`}><img className="beers-imge" alt="" src={beer.image_url} height={100}/>
                  </Link>
                  <div className="beer-h2-p">
                 <Link className="link-stye" to={`/beers/${beer._id}`}><h2>{beer.name}</h2></Link> 
                        <p>{beer.tagline}</p>
                        <p><span>Created By:</span> {beer.contributed_by}</p>
                    </div> 
                    </div>
                ))}
           </div>}
        </>
    )
}

export default Beer