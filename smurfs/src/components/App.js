import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SmurfList from './SmurfList';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      smurfs: state.smurfs
  };
};


export default connect(mapStateToProps, {SmurfList})(App);
