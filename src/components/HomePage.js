import * as React from 'react';
import {Link} from 'react-router-dom'
import imagUrl from '../assets/beers.png'
import imagUrl2 from '../assets/random-beer.png'
import imagUrl3 from '../assets/new-beer.png'
import './BeeR.css'
import './HomePage.css'



function HomePage(){
    return (
        <div>
    
        <div>
        <Link className='Link-style' to="/beers">
        <img  className="beer-imag" alt="" src={imagUrl} /><h1 className='h1-beer-style'>All Beer</h1>
        </Link>
        <p className='homepage-p-style'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
         pharetra egstas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
        </div>
     
         <div>
        <Link className='Link-style' to="/random-beer">
        <img  className="beer-imag" alt="" src={imagUrl2} /><h1 className='h1-beer-style'>Random Beer</h1>
        </Link>
        <p className='homepage-p-style'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
         pharetra egstas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
        </div>

    
        <div>
        <Link className='Link-style' to="/beers/addnew">
        <img  className="beer-imag" alt="" src={imagUrl3} /><h1 className='h1-beer-style'>Add new beer</h1>
   
        </Link>
        <p className='homepage-p-style'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
         pharetra egstas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
        </div>
        </div>
    )
}

export default HomePage;