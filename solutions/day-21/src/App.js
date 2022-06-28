import React , {useState, useEffect, useRef} from 'react';
import ReactDOM , {findDOMNode} from 'react-dom';
import Main from './main';
import validator from 'validator';
import './App.css';


const option = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]

const options = option.map((opt,index) =>{
  return <option key={index} value={opt.value}>
    {opt.label}
  </option>
})

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


const Hex = (props) =>{
  let copy = useRef(null);

  const onCopy = () =>{
    copy = props.col;
    let inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = copy;
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    console.log(copy);
  }
  
  return (
      <div className="hex" style={{backgroundColor: props.col}}>
        <p>color</p>
        <h2 onClick={onCopy}>📋</h2>
      </div>
    )

}

function App() {
  const initalState = {
    firstName : '',
    lastName : '',
    country: '',
    touched : {
      firstName : false,
      country : false,
    }
  }

  const [formData,setFormData] = useState(initalState);

  const [data,setData] = useState([])

  useEffect(()=>{
    // fetchData();
  })

  const fetchData = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  let err = '';
  const handleChange = (e) =>{
    const {value,name} = e.target;
    if(!validator.isAlpha(value)){
      err = "Field should only contains string";
    }
    // console.log(validator.isAlpha(e.target.value))
    setFormData({...formData,[name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
  }

  const handleBlur = (e)=>{
    const {name} = e.target;
    setFormData({...formData,touched : {...formData.touched , [name] : true}}) 
  }

  const validate = () =>{
    const errors = {
      first : '',
      count : ''
    }

    if(formData.touched.firstName && (formData.firstName.length < 3 || formData.firstName.length > 20)){
      errors.first = " First Name should be between 3 to 20";
    }
    if(!formData.country){
      errors.count = " Country should be selected";
    }

    return errors;
  }

  // const error = validate()

  let colors = [];
  const [ref,setRef] = useState(colors);

  const addColors = () =>{
    colors = [];
    for(let i = 0;i<27;i++){
      const color = `#${Math.random().toString(16).slice(2,8)}`;
      colors.push(color);
    }
    setRef(colors);
  }
  
  // addColors()
  const onClick = () => {
    addColors();
    // console.log(ref);
  }

  return (
    <div className="App" onLoad={onClick}>
      {/* <h1>Enter Your Details </h1>
      <form action="">
        <input type="text" name='firstName' value={formData.firstName} placeholder='Enter First Name' onBlur={handleBlur} onChange={handleChange}/> <br />
        {/* {error.first && <span>{error.first}</span>}<br/> */}
        {/* {err&& <span>{err}</span>} */}
        {/* <input type="text" name='lastName' placeholder='Enter Last Name' value={formData.lastName} onChange={handleChange}/><br /> */}
        {/* {err&& <span>{err}</span>} */}
        {/* <select name="country" id="country" onChange={handleChange}value={formData.country} onBlur={handleBlur}> */}
          {/* {options} */}
        {/* </select><br /> */}
        {/* {err&& <span>{err}</span>} */}
        {/* {error.count && <span>{error.count}</span>}<br/> */}
        {/* <button onClick={handleSubmit}>Submit</button> */}
      {/* </form> */}
      {/* <br /> */} 
      {/* {data.map((country) => (
            <Country country={country} />
      ))} */}
      {/* <Main></Main> */}
      {/* <h1 ref={ref}>How to use data from uncontrolled input using useRef</h1> */}
      {/* <input type='text' ref={ref} /> */}
      <br />
      <h1>Hexadecimal Colors</h1>
      <button onClick={onClick}>Generate</button>
      <div className="hexs">
        {ref.map((col,ind) =>{
          return <Hex key={ind} col={col}/>
        })}
      </div>
  </div>)
}

export default App;
