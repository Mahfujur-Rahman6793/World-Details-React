import './country.css';
const Country = ({ country }) => {
    console.log(country);
    const { name, flags, population } = country;
    // const { name, flags} = country;
    return (
        <div className='country'>
            {/* <h2>Name : {name?.common}</h2>
            <img src={flags.png} alt="" /> */}
            <h3>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Population : {population}</h4>
        </div>
    );
};

export default Country;