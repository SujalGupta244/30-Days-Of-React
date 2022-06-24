import React ,{Component} from  'react';
import Header from './header';
import axios from 'axios';

const CatsCard = (props)=>{
    const {image,name,weight,origin,life_span,temperament,description} = props;
    // const {url} = image;
    // console.log(props.image.url);
    return(
        <div className="card">
            <img src={image} alt="" />
            <h2 className="name">{name}</h2>
            <h3 className="country">{origin}</h3>
            <h4 className="temp">Temprament : {temperament}</h4>
            <h4 className="life">Life span : {life_span} years</h4>
            <h4 className="weight">Weight : {weight.metric} kg</h4>
            <h4>Description</h4>
            <p>{description}</p>
        </div>
    )
}

class Home extends Component {
    state = {
        data : []
    }
    
    AxiosData = async ()=>{
        const url = 'https://api.thecatapi.com/v1/breeds';
        try {
            const response = await axios.get(url);
            const data = await response.data;
            this.setState({
              data,
            })
          } catch (error) {
            console.log(error);
          }
        console.log(this.state.data[0]);
    }
    
    // AxiosData();
    render(){
        this.AxiosData();
        return(
            <div className='home'>
                {/* <Header/> */}
                {this.state.data.map(cat =>{
                    return <CatsCard  key={cat.id} {...cat}/>
                })}
            </div>
        )
    }
}

export default Home;