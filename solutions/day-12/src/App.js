import React , {Component, createRef} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
// import './style/test.scss';
import axios from 'axios';
import moment from 'moment';
import headerStyles from './style/header.module.scss'; 
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiSocialTwitterCircular,
} from 'react-icons/ti'

// import styled from 'styled-components'
import SimpleReactValidator from 'simple-react-validator';

/*
function App() {

  const firstName  = createRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName.current.value)
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name: </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          ref={firstName}
        />
        <button type='submit'>Submit</button>
      </form>      
    </div>
  );
}*/

const Header = () => (
  <header className={headerStyles.header}>
         <div className={headerStyles.headerWrapper}>
           <h1>30 Days Of React</h1>
           <h2>Getting Started React</h2>
           <h3>JavaScript Library</h3>
           <p>Instructor: Asabeneh Yetayeh</p>
           <small>Oct 15, 2020</small>
           <h1>How to use moment</h1>
          <p>This challenge was started {moment('2022-10-01').fromNow()}</p>
          <p>The challenge will be over in {moment('2022-10-30').fromNow()}</p>
          <p>Today is {moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
         </div>
       </header>
)

const Footer = () => (
  <footer>
    <h3>30 Days Of React</h3>
    <div>
      <TiSocialLinkedinCircular />
      <TiSocialGithubCircular />
      <TiSocialTwitterCircular />
    </div>
    <div>
      <small> Copyright &copy; {new Date().getFullYear()} </small>
    </div>
  </footer>
)


// class App extends Component {
//   constructor(props) {
//     super(props)
//     // console.log('I am  the constructor and  I will be the first to run.')
//     this.state = {
//       firstName: 'John',
//       data: [],
//     }
//   }

//   componentDidMount() {
//     // console.log('I am componentDidMount and I will be last to run.')
//     const API_URL = 'https://restcountries.eu/rest/v2/all'
//     fetch(API_URL)
//       .then((response) => {
//         return response.json()
//       })
//       .then((data) => {
//         console.log(data)
//         this.setState({
//           data,
//         })
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }

//   render() {
//     return (
//       <div className='App'>
//         <h1>React Component Life Cycle</h1>
//         <h1>Calling API</h1>
//         <div>
//           <p>There are {this.state.data.length} countries in the api</p>
//           <div className='countries-wrapper'>
//             {this.state.data.map((country) => (
//               <div>
//                 <div>
//                   {' '}
//                   <img src={country.flag} alt={country.name} />{' '}
//                 </div>
//                 <div>
//                   <h1>{country.name}</h1>
//                   <p>Capital: {country.capital}</p>
//                   <p>Population: {country.population}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       <Header/>
//       </div>
//     )
//   }
// }

// Class component using Axios for fetching data

class App extends Component {

  constructor() {
    super()
    this.validator = new SimpleReactValidator();
  }

  state = {
    data: [],
    name: ''
  }

  handleChange = (e)=>{
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    if (this.validator.allValid()) {
      alert('You submitted the form and stuff!');
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
    console.log(this.state);
  }

  componentDidMount() {
    const API_URL = 'https://restcountries.eu/rest/v2/all';
    axios
      .get(API_URL)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  renderCountries = () => {
    return this.state.data.map((country) => {
      const languageOrLanguages =
        country.languages.length > 1 ? 'Langauges' : 'Language'
      const formatLanguages = country.languages
        .map(({ name }) => name)
        .join(', ')
      return (
        <div>
          <div>
            {' '}
            <img src={country.flag} alt={country.name} />{' '}
          </div>
          <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>
              {languageOrLanguages}: {formatLanguages}
            </p>
            <p>Population: {country.population}</p>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>Fetching Data Using Axios</h1>
        <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className='countries-wrapper'>{this.renderCountries()}</div>
        </div>
        <form className="form">
        <input type="text" onChange={this.handleChange} placeholder='Enter Name' value={this.state.name}/>
        {this.validator.message('name', this.state.name, 'required|alpha')}
        <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <Header/>
        <Footer/>
      </div>
    )
  }
}


export default App;
