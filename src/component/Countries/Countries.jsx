import { useEffect, useState } from "react";
import Country from "../country/Country";
import './countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h3>Welcome to world tour : {countries.length}</h3>
            <div className="Country-container">
            {
                // countries.map(country =><Country key={country.cca3} country={country}></Country>)
                countries.map(country=><Country country={country}></Country>)

            }
            </div>

        </div>
    );
};

export default Countries;