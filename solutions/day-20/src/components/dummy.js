import React, { Component } from "react";

const option = [
    {
        value: '',
        label : '--select--'
    },
    {
        value: 'hexa',
        label : 'hexa'
    },
    {
        value: 'rgb',
        label : 'rgb color'
    },
    {
        value: 'id',
        label : 'random id'
    },
    {
        value: 'ip',
        label : 'random ip'
    },
]

const options = option.map((opt,index) =>{
            return <option key={index} value={opt.value}>{opt.label}</option>})

class Dummy extends Component{
    state = {
        number : 0,
        prop : '',
        data : [],
    }

    handleChange = (e)=>{
        let {name,value} = e.target;
        this.setState({
            [name]: value,
        });
    }

    getData = (state) => {
        const count = state.number;
        if(state.prop === 'hexa'){
            for(let i = 0;i<count ;i++){
                let ran  = `#${Math.random().toString(16).slice(2,8)}`;
                state.data.push(ran);
            }
        }
        this.setState({
            data : this.state.data
        })
        // console.log(state);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.getData(this.state);
    }
    render(){
        return (
            <div className="dummy">
                <h1>Dummy Data Generator</h1>
    
                <p>Using this application you can create array of numbers, odd numbers, even numbers, id, IP, colors, persons, countries, emails, names, cities,cats, foods, stories, and sports objects. Check all the possibilities you can by clicking the drop down button.</p>
    
                <form action="">
                    <input type="number" placeholder="Enter a number" name='number' 
                    value={this.state.number}
                    onChange={this.handleChange}/>
                    <select name="prop" onChange={this.handleChange}>
                        {options}
                    </select>
                    <button onClick={this.handleSubmit}>Generate</button>
                </form>
                <textarea name="data" id="data" cols="30" rows="10" 
                value={this.state.data} 
                onChange={(e) => this.handleChange(e)}
                />
            </div>
        )
    }
}

export default Dummy;
