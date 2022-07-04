import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { paras } from './data';

const ShowDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const now = new Date()
    const month = months[now.getMonth()].slice(0, 3)
    const year = now.getFullYear()
    const date = now.getDate()
    const hour = now.getHours()
    const min = now.getMinutes();
    return ` ${month} ${date}, ${year} ${hour > 12 ? hour - 12 : hour } : ${min < 10 ? `0${min}` : min} ${hour > 12 ? 'pm' : 'am'}`
}

const Tweets = ()=>{
    const [list,setList] = useState(paras);
    const [edit , setEdit] = useState(false);
    const [ind,setInd] = useState('');
    const [text,setText] = useState('');
    let index;

    const editTweet = (e) =>{
        setEdit(true);
        index = paras.indexOf(e.target.parentElement.parentElement.previousSibling.textContent)
        setInd(index);
        setText(paras[index])
        // console.log(e.target.parentElement.parentElement.previousSibling.textContent);
    }

    const handleChange = (e) =>{
        const {value} = e.target;
        setText(value);
        // console.log(value);
    }

    const saveTweet = () =>{
        paras[ind] = text;
        setEdit(false);
        // console.log(paras);
    }

    const deleteTweet = (e) =>{
        const index = paras.indexOf(e.target.parentElement.parentElement.previousSibling.textContent)
        paras.splice(index,1);
        setList([...paras]);
        // console.log(paras,list);
    }
    const cancelEdit = () =>{
        setEdit(false);
    }
    const tweets = paras.map((para,index) =>{
        return(
            <div className="tweet" key={index}>
                {(!edit || ind !== index) && 
                <>
                <div className="img"></div>
                <h3>Sujal Gupta</h3>
                <span>@sujal</span>
                 <p>{para}</p>
                <div className="opt">
                    <span className="edit" onClick={editTweet}><i className="far fa-edit"></i></span>
                    <span className="delete" onClick={deleteTweet}><i className="far fa-trash-alt"></i></span>
                    <span className="comment"><i className="far fa-comment"></i></span>
                    <span className="heart"><i className="far fa-heart"></i></span>
                    <span className="retweet"><i className="fas fa-retweet"></i></span>
                    <ShowDate/>
                </div>
                </>
                }
                {edit && ind === index && 
                <>
                    <textarea value={text} onChange={handleChange}></textarea>
                    <button className="save" onClick={saveTweet}>Save</button>                
                    <button className='cancel' onClick={cancelEdit}>Cancel</button>                
                </>
                }
            </div>
        )
    })

    return tweets;
}

export default Tweets;