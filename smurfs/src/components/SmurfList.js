import React from 'react'
import { connect } from 'react-redux'

import { getSmurfs } from '../actions'

class SmurfList extends React.Component {
	state = {
		smurfs: []
	}

	fetchSmurfs = e => {
		e.preventDefault()
		this.props.getSmurfs()
	}

	render () {
		return (
			<div>
				{this.props.smurfs.map((smurf, index) => (
					<h1 key={index}>
						{smurf.name}
						{smurf.age}
						{smurf.height}
					</h1>

				))}
				{this.props.error && <p className="error">{this.props.error}</p>}
				<button onClick={this.fetchSmurfs}>See the Smurf Village</button>
			</div>
		);
	}
}


const mapStateToProps = state => ({
	smurfs: state.smurfs,
  error: state.error
  
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);


{/* <form>
<input type="text" name="newSmurf" value={this.state.newSmurf} onChange={this.handleChange} />
<input type="text" name="newSmurf" value={this.state.newSmurf} onChange={this.handleChange} />
	
	
	

</form> */}
