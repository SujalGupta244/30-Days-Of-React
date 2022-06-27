import React , {useState, useEffect} from 'react';
import ReactDOM , {findDOMNode} from 'react-dom';
import useFetch from './useFetch';
import './App.css';



const Country = ({ country: { name, flag, population } }) => {
    return (
      <div className='country'>
        <div className='country_flag'>
          <img src={flag} alt={name} />
        </div>
        <h3 className='country_name'>{name.toUpperCase()}</h3>
        <div class='country_text'>
          <p>
            <span>Population: </span>
            {population}
          </p>
        </div>
      </div>
    )
}
  
const Main = (props) => {
const url = 'https://restcountries.eu/rest/v2/all';
const data = useFetch(url);

return (
    <div className='main'>
    <h1>Custom Hooks</h1>
    <h1>Calling API</h1>
    <div>
        <p>There are {data.length} countries in the api</p>
        <div className='countries-wrapper'>
        {data.map((country) => (
            <Country country={country} />
        ))}
        </div>
    </div>
    </div>
)
}
  
  
export default Main;



