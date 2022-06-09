import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import frontend from './images/Frontend_technologies.png';
import {tenHighestPopulation as pop} from './data.js';
// const techs = ['HTML', 'CSS', 'JavaScript'];
// const name = 'Sujal Gupta';
// const  country = 'India', title = 'web', gender = 'male', email = 'sdlf@fmai.com', phoneNumber = 354390;


const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]

const Skill = ({skill : [tech,level]})=>{
  return <li >{tech} {level}</li>;
}

const Skills = ({skills})=>{
  let skill = skills.map(skill => <Skill key={skill} skill={skill}/>)
  return skill;
}

// Header Component
const Header = () => {
  return(
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
    <ImgComp/>
    <Skills skills={skills}/>
  </header>)
}
class Heade extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    )
  }
}


const ImgComp = ()=>{
  return <img src={frontend} alt="frontend technologies" />
}


// User Card Component
const UserCard = () => {
  return (
  <div className='user'>
    <img src={frontend} alt="developer" />
    <h3>Sujal Gupta</h3>
    <p>Junior frontend developer, India</p>
    <h2>Skills</h2>
    <ul>
      {/* <li>HTML</li>
      <li>CSS</li>
      <li>JS</li> */}
      <TechList/>
    </ul>
    <p>joined on may 21, 2022</p>
  </div>)
}

class User extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='user'>
        <img src={frontend} alt="developer" />
        <h3>Sujal Gupta</h3>
        <p>Junior frontend developer, India</p>
        <h2>Skills</h2>
        <ul>
          {/* <li>HTML</li>
          <li>CSS</li>
          <li>JS</li> */}
          <TechList/>
        </ul>
        <p>joined on may 21, 2022</p>
      </div>
    )
  }
}

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}> {tech} </li>)
  return techsFormatted;
}

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color;
}

const HexaColor = () => <div style={{backgroundColor: hexaColor(),padding: '2rem'}}>{hexaColor()}</div>

const Button = (props)=> {
  return <button onClick={props.click}>show something</button>
}

const Number = ({num})=>{
  let background;
  if(num%2 === 0){
    background = `#21BF73`; 
  }  else if (num % 2 !== 0){
    background = `#FDDB3A`; 
  }
  
  if(checkPrime(num)){
    background = `#FD5E53`;
  }

  function checkPrime(n){
    if (n <= 1)
    return false;

    // Check from 2 to square root of n
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i === 0)
            return false;

    return true;
  }
  return <div style={{backgroundColor: background}}>{num}</div>
}

const NumberGenerator = ({arr})=>{
  const container = arr.map((num,index) =>{
    return <Number key={index} num={num}/>
  })
  // return `#21BF73 - green  #FDDB3A - yellow  #FD5E53`;
  return (
  <div className="container">
    {container}
  </div>);
}
const ColorGenerator = ({arr})=>{
  const container = arr.map(num =>{
    return <HexaColor key={num+2} num={num}/>
  })
  // return `#21BF73 - green  #FDDB3A - yellow  #FD5E53`;
  return (
  <div className="color-container">
    {container}
  </div>);
}

const Population = ({pop})=>{
  // console.log(pop);
  const popu = pop.map(p =>{
    return (
      <div key={p.population}>
        <div>{p.country}</div>
        <div style={{width: `${(p.population/pop[0].population)*100}%`, backgroundColor:'#FFA500'}}></div>
        <div>{p.population}</div>
      </div>
    )
  })

  return (
      <div className="pop">{popu}</div>
  );
}

// Main Component
// const Main = (props) => {
//   const show = () =>{
//     alert("show me the meaning of being alone")
//   }
//   const arr = [];
//   const arr2 = [];
//   for(let i = 0;i<32;i++){
//     arr.push(i);
//     arr2.push(hexaColor())
//   }
//   return (
//     <main>
//       <div className='main-wrapper'>
//         <p>Prerequisite to get started react.js:</p>
//         <HexaColor/>
//         <ul>
//           <TechList />
//         </ul>
//         <UserCard />
//         <User/>

//       </div>
//       {/* <Button click={show}/> */}
//       <NumberGenerator arr={arr}/>
//       <ColorGenerator arr={arr2}/>
//       <Population pop={pop}/>
//       <button onClick={props}>Color Change</button>
//     </main>
//   )
// }
class Main extends Component{
  constructor(props){
    super(props)
  }
  show = () =>{
    alert("show me the meaning of being alone")
  }
  arr = [];
  arr2 = [];
  addEle(){
    for(let i = 0;i<32;i++){
      this.arr.push(i);
      this.arr2.push(hexaColor())
    }
  }
  
  render(){
    this.addEle()
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <HexaColor/>
          <ul>
            <TechList />
          </ul>
          <UserCard />
          <User/>
  
        </div>
        {/* <Button click={show}/> */}
        <NumberGenerator arr={this.arr}/>
        <ColorGenerator arr={this.arr2}/>
        <Population pop={pop}/>
        <h2>{this.props.season}</h2>
        <button onClick={this.props.changeColor}>Color Change</button>
      </main>
    )
  }
}

// Footer Component
const Footer = () => {

  return (
  <footer>
    <div className='footer-wrapper'>
      <h2>Subscribe</h2>
      <p>sign up with your email address to receive news and updates </p>
      <div className="input-control">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name'/>
        <input type="text" placeholder='Email'/>
      </div>
      <button>Subscribe</button>
    </div>
      <p>Copyright 2020</p>
  </footer>
)

}
// The App, or the parent or the container component
// const App = () => (
//   <div className='app'>
//     <Header />
//     <Heade/>
//     <Main />
//     <Footer />
//   </div>
// )

const LoginForm =(props)=>{
  return (
    <>
    {props.log ? <h2>Logout</h2>:<h2>Please Login</h2>} 
    <button onClick={props.onClick} >{props.text}</button>
    {!props.log && (
          <p>
            Please login to access more information about 30 Days Of React
            challenge
          </p>
        )}
    </>
  )
}

const Loader = (props)=>{
  let loader = props.load ? <h2>Loading Your website</h2> : <h2>Your website is loaded</h2>;
  // console.log(props);
  return (
    <>
      {loader}
      <button onClick={props.onClick}>{props.load ? "Load" : "Unload"}</button>
    </>
  )
}




class App extends Component{
  state = {
    color:"#fff",
    loggedIn: false,
    season : "autum",
    count : 0,
    loading : true
  }
  changeColor = ()=>{
    const arr = ["autum","winter","spring","summer"];
    const colors = ["#fff","#eee","#ddd","#aaa"];
    // let newCount = this.state.count < arr.length ? this.state.count + 1 : 0 ;
    // let season = this.state.season;
    // let color = this.state.color ;  
    // let color = this.state.color === "#0F172A" ? '#fff': "#0F172A";  
    this.setState(previousState => {
      return {
        count: previousState.count < arr.length ? previousState.count + 1 : 0,
        color : colors[this.state.count],
        season : arr[this.state.count]

      }
    })
    // this.setState({
      // count : newCount,
      // color : colors[this.state.count],
      // season : arr[this.state.count]
    // })
    console.log(this.state.count);
  }

  loading = () => {
    setTimeout(()=>{
      this.setState({
       loading : !this.state.loading 
      })
    },2000)
  }
  handleLogin = ()=>{
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }
  render(){
    return(
      <div className='app' style={{backgroundColor: this.state.color}}>
        <Header />
        <Heade/>
        <Main changeColor={this.changeColor} season={this.state.season}/>
        <LoginForm log={this.state.loggedIn} onClick={this.handleLogin} text={this.state.loggedIn ? "Logout": "Login"}/>
        <Loader onClick={this.loading} load={this.state.loading}/>
        <Footer />
        <EmptyArea/>
      </div>
    )
  }
}




class EmptyArea extends Component {

  state ={
    x: 12,
    y: 34
  }
  moveElm = ()=>{
    let x = 0;
    let y = 0;
    if((Math.random() * window.innerWidth) < window.innerWidth - 22){
      x =  Math.random() * window.innerWidth;
    }else{
      x = 0;
    }
    if((Math.random() * window.innerHeight) < window.innerHeight){
      y = Math.random() * window.innerHeight;
    }else{
      y = 0;
    }
    this.setState({
      x: x,
      y: y
    })
    console.log(this.state.x,this.state.y,this.height);
  }
  render (){
    return (
      <div className="empty">
        <h2 className="empText" onMouseMove={this.moveElm} 
        style={{transform:`translate(${this.state.x}px,${this.state.y}px)`}}>30 days of React</h2>
      </div>
    )
  }
}


// const header = (
//   <header>
//     <div className='header-wrapper'>
//       <h1>Welcome to 30 Days Of React</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Instructor: Asabeneh Yetayeh</p>
//       <small>Date: Oct 1, 2020</small>
//     </div>
//   </header>
// )

// // LEVEL 1
// const main = (
//   <main>
//     <div className='main-wrapper'>
//       <p>
//         Prerequisite to get started{' '}
//         <strong>
//           <em>react.js</em>
//         </strong>
//         :
//       </p>
//       <ul>
//         {techs}
//         {/*<li>HTML</li>
//         <li>CSS</li>
//         <li> JavaScript</li>*/}
//       </ul>
//     </div>
//     <ul>
//       <li>{name}</li>
//       <li>{country}</li>
//       <li>{title}</li>
//       <li>{gender}</li>
//       <li>{email}</li>
//       <li>{phoneNumber}</li>
//     </ul>
//     <img src={frontend} alt="" />
//   </main>
//   )

// // LEVEL 2 
// const footer = (
//   <footer>
//     <div className='footer-wrapper'>
//       <h2>Subscribe</h2>
//       <p>sign up with your email address to receive news and updates </p>
//       <div className="input-control">
//         <input type="text" placeholder='First Name' />
//         <input type="text" placeholder='Last Name'/>
//         <input type="text" placeholder='Email'/>
//       </div>
//       <button>Subscribe</button>
//     </div>
//       <p>Copyright 2020</p>
//   </footer>
//   )

// // LEVEL 3
// const user = (
//   <>
//   <div className='user'>
//     <img src={frontend} alt="developer" />
//     <h3>Sujal Gupta</h3>
//     <p>Junior frontend developer, India</p>
//     <h2>Skills</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JS</li>
//     </ul>
//     <p>joined on may 21, 2022</p>
//   </div>
//   </>  
// )

// const app = () =>{
//   return (<div className='app'>
//     {header}
//     <Header/>
//     {main}
//     {user}
//     {footer}
//   </div>)
// }

// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two arguments
// ReactDOM.render(app, rootElement)
export default App;
