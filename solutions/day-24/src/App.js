import React , {useState,useEffect} from 'react';
import './App.css';

const Card = (props) =>{
  return(
    <div className="card">
      <div className="flag">
        <img src={props.img} alt="" />
        <h5>Country {props.name}</h5>
      </div>
      <div className="details">
        <h5>Capital: {props.captal}</h5>
        <h5>Language: {props.language}</h5>
        <h5>population: {props.population}</h5>
      </div>
    </div>
  )
}

function App() {

  const [data,setData] = useState([])

  useEffect(()=>{
    fetchData();
  })

  const fetchData = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <div className="header">
        <h2>World Courtries Data</h2>
        <h4>Currently, we have {data.length} countries</h4>
      </div>
      <form action="">
        <input type="text" placeholder='Search Country by Name'/>
      </form>
      <div className="cards">
        {data.map(coun =>{
          return <Card {...coun}/>
        
        })}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div className="footer">
        <h3>Copyright ©2020 30 Days Of React</h3>
        <h3>Join 30 Days of React challenge</h3>
        <p>Designed and Built by Sujal Gupta</p>
      </div>
    </div>
  );
}

export default App;
