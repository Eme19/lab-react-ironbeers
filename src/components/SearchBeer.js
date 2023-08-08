import axios from "axios"
import { useState } from "react";
import {FaSearch} from 'react-icons/fa'
import { Input } from 'antd';
import './SearchBar.css'


function SearchBeer({setResults}){
    const [search, setSearch] = useState("")


const fetchData = (value) => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/search?q={query}')
    .then((response) => response.json())
    .then((json) => {
        const results = json.filter((beer) => {
            return (
                value &&
                beer.name &&
                beer.name.toLowerCae().includes(value)
            );
        });
        setResults(results)
    });
};

const handleChange = value =>{
    setSearch(value);
    fetchData(value)
}
    
    

    return(
        <div className="search-style">
        <div className='input-wrapper'>
          <FaSearch id="search-icon" />
          <input className="search-input-style" placeholder="Type to search....." value={search} onChange={e => handleChange(e.target.value)}/>
           </div>
           </div>
    )
}

export default SearchBeer; 