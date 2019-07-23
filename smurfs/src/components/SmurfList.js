import React from 'react'
import { connect } from 'react-redux'

import { fetchSmurfs, fetchSmurfsBegin, fetchSmurfsSuccess, fetchSmurfsFailure } from '../actions'

class SmurfList extends React.Component {
	
	componentDidMount() {
		this.props.dispatch(fetchSmurfs())
	}

	render() {
		const { err, fetchingSmurfs, smurfs } = this.props
		console.log(smurfs)

		if (err) {
			return <div>Error! {err.message}</div>
		}
		if (fetchingSmurfs) {
			return <div>Fetching...</div>
		}

		return (
			<ul>
				{smurfs.map((smurf, index) => {					
						return (
							<div key={index}>
								<li>Name: {smurf.name}  Age: {smurf.age} Height: {smurf.height}</li>
							</div>

						)		
				}
					)}
			</ul>
		)
	}


}


const mapStateToProps = state => ({
	smurfs: state.smurfs,
	fetchingSmurfs: state.fetchingSmurfs,
	error: state.err
  
});

export default connect(mapStateToProps)(SmurfList);

