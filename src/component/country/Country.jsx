import { useState } from 'react';
import './country.css';
const Country = ({ country }) => {
    console.log(country);
    const { name, flags, population, cca3 } = country;
    const [visit,setVisit] = useState(false);
    function handleVisited() {
        setVisit(!visit);
    }
    // const { name, flags} = country;
    return (
        <div className='country'>
            {/* <h2>Name : {name?.common}</h2>
            <img src={flags.png} alt="" /> */}
            <h3>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Population : {population}</h4>
            <small>Code : {cca3}</small>
            <hr />
            <button className='btn-visit' onClick={handleVisited}>{visit?'visited':'going'}</button>
            
        </div>
    );
};

export default Country;