import React , {useState} from 'react';
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

  const error = validate()

  return (
    <div className="App">
      <h1>Enter Your Details </h1>
      <form action="">
        <input type="text" name='firstName' value={formData.firstName} placeholder='Enter First Name' onBlur={handleBlur} onChange={handleChange}/> <br />
        {/* {error.first && <span>{error.first}</span>}<br/> */}
        {err&& <span>{err}</span>}
        <input type="text" name='lastName' placeholder='Enter Last Name' value={formData.lastName} onChange={handleChange}/><br />
        {err&& <span>{err}</span>}
        <select name="country" id="country" onChange={handleChange}value={formData.country} onBlur={handleBlur}>
          {options}
        </select><br />
        {err&& <span>{err}</span>}
        {/* {error.count && <span>{error.count}</span>}<br/> */}
        <button onClick={handleSubmit}>Submit</button>
      </form>
  </div>)
}

export default App;
