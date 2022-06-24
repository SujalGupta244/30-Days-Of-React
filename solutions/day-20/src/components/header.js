import React , { Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Header extends Component{
    state = {
      data: [],
    }
    weights = 0;
    avg = 0;
    years = 0;
    avgYear = 0;
  
    componentDidMount() {
        this.AxiosData();
    }

    calcWegLife = () =>{
        this.state.data.map((cats) => (
            this.weights += parseFloat(cats.weight.metric.slice(0,2)),
            this.years += parseFloat(cats.life_span.slice(0,2))
            ))
        this.avg = (this.weights/this.state.data.length).toPrecision(3)
        this.avgYear = (this.years/this.state.data.length).toPrecision(3)
        // console.log(this.state.data[0])
    }
  
    AxiosData = ()=>{
        const url = 'https://api.thecatapi.com/v1/breeds';
        axios
        .get(url)
        .then(response =>{
            this.setState({
                data: response.data
            })
            // console.log(response.data);
        })
    }


    render() {
      return (
        <div className='header'>
          <h1>30 days of React</h1>
          <h1>Cats Paradise</h1>
          <div>
            <p>There are {this.state.data.length} Cats breeds in the api</p>
            <div className='countries-wrapper'>
              {this.calcWegLife()}
              <p>On average a cat can weigh about {this.avg} kg and lives {this.avgYear} years</p>
            </div>
            <div className="nav">
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/dummy'>Dummy Data</Link>
            </div>
          </div>
        </div>
      )
    }
}

export default Header;