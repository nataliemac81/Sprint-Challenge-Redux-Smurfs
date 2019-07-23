import React from 'react'
import { connect } from 'react-redux'

import { fetchSmurfs, addSmurf } from '../actions'

class SmurfList extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
			age: '',
			height: ''
		}
	}
	componentDidMount() {
		this.props.fetchSmurfs()
	}

	handleChange = (evt) => {
		evt.preventDefault()
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}

	addNewSmurf = (evt) => {
		evt.preventDefault()

		const { name, age, height } = this.state
		this.props.addSmurf(name, age, height)

		this.setState({
			name: '',
			age: '',
			height: ''
		})
	}

	render() {
		const { err, fetchingSmurfs, smurfs } = this.props
		const { name, age, height } = this.state

		if (err) {
			return <div>Error! {err.message}</div>
		}
		if (fetchingSmurfs) {
			return <div>Fetching...</div>
		}

		return (
			<div>
				<ul>
					{smurfs.map((smurf, index) => {					
						return (
							<div key={index}>
								<li>Name:{smurf.name} -- Age: {smurf.age} -- Height: {smurf.height}</li>

							</div>
						)		
					}
						)}
				</ul>

				<h2>Add a Smurf to the Village!</h2>
				<form onSubmit={this.addNewSmurf}>
					<input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange}></input>
					<input type="text" name="age" placeholder="Age" value={age} onChange={this.handleChange}></input>
					<input type="text" name="height" placeholder="Height" value={height} onChange={this.handleChange}></input>
					<button type="submit">Add Smurf</button>
				</form>
			</div>
		)	
	}


}


const mapStateToProps = state => ({
	smurfs: state.smurfs,
	fetchingSmurfs: state.fetchingSmurfs,
	error: state.err
  
});


export default connect(mapStateToProps, {fetchSmurfs, addSmurf})(SmurfList);

