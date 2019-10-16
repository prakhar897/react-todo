import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(props){
		super(props);
		this.state={data:[],inputtext:''};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		const data = [...this.state.data,this.state.inputtext];      // new data object where the inputtext is added
		this.setState({data,inputtext:''},()=>{console.log(data)}); //replaced previous object with new object
	}

	render() {
		const listItems = this.state.data.map((item,index) =>{
			return <li key={index}>
				{item}
			</li>
		});

		return (
		  <div className="App">
		  	<h1> Todo App </h1>
		    <form onSubmit={this.handleSubmit}>
		    	<input type="text" name="inputtext" value={this.state.inputtext} onChange = {
		    		(e)=>{
		    			this.setState({inputtext:e.target.value})
		    		}
		    	} />
		    <button type="Submit"> Add item </button>
		    </form>
		    <ul>
		    	{listItems}
		    </ul>
		  </div>
		);
	}
}

export default App;
