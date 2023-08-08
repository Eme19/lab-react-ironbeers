import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import axios from "axios"
import './BeerDetails.css'




function SingleBeer(){
const [beerdetail, setBeerdetail] = useState(null)
const [isLoading, setIsloading] = useState(false)

const {beerId} = useParams()

useEffect(()=> {
    async function fetchSingleBeer() {
        try {
            const Response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            setBeerdetail(Response.data)
            setIsloading(true)
        }catch(error){
            console.log('==show==>', error)
        }


    }
    fetchSingleBeer()
   
}, [beerId])


if(beerdetail === null && isLoading === false){
    return <p>Loading..? </p>
} 

    return (
        <>
        <div className="nav-imag">
         <Link  to="/beers"><img  className="beer-nav-style" alt="" src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"  /></Link>
          </div>
         

         {beerdetail === null ? <p>loading....</p> :
        <div className="beerDetails">
            <div>
            <img alt={beerdetail.name} src={beerdetail.image_url} />
            </div>
            <h5>{beerdetail.name}</h5>
          <ul>
               <li id="liDetail">{beerdetail.attenuation_level}</li>
               <li>{beerdetail.first_brewed}</li>
                <li>{beerdetail.tagline}</li>
                <li>{beerdetail.description}</li>
                <li>{beerdetail.brewers_tips}</li>
                <li>{beerdetail.contributed_by}</li>
                
            </ul>
            
            
       
        </div>}
       
        </>
    )
}

export default SingleBeer ; 