import React from 'react'
import { connect } from 'react-redux'

import { getSmurfs } from '../actions'

class SmurfList extends React.Component {
	render () {
		
	}
}






const mapStateToProps = state => ({
	smurfs: state.smurfs,
	fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
  
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);