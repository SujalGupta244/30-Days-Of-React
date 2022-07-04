import React , {useState, useRef} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Tweets from './components/tweet';
import { paras } from './components/data';
import './App.css';

function App() {
  const [total,setTotal] = useState(250),[count,setCount] = useState(0);
  const ref1 = useRef(null),ref2= useRef(null);
  const [list,setList] = useState(paras);
  
  const handleChange = (e) =>{
    const {value} = e.target;
    setCount(value.length);
    setTotal(250 - count)
    // console.log(total,count,value.length);
    if(1 < count < 249){
      ref2.current.style.backgroundColor = '#0389cc';
    }else{
      ref2.current.style.backgroundColor = '#92d0f0';
    }
  }

  const addTweet  = (e) =>{
    e.preventDefault()
    if(total <= 249){
      paras.push(ref1.current.value);
      setList(...paras);
      // setList([list.push(ref1.current.value)])
      ref1.current.value = "";
      ref2.current.style.backgroundColor = '#92d0f0';
      setCount(0);
      setTotal(250);
    }
    // console.log(paras);
  }

  return (
    <div className="App">
      <div className="tweeter">
        <form action="">
          <textarea ref={ref1} onChange={handleChange} placeholder="Tweet about 30 day of React" />
          <button onClick={addTweet} ref={ref2}>Add Post</button>
          <p className="cou">{total}</p>
        </form>
        <Tweets/>
      </div>
    </div>
  );
}

export default App;
