import React from 'react';

class Navbar extends React.Component {

  render(){
    return(
      <nav id="navbar">
        <span id="risk-level-nav">Risk: {this.props.riskLevel}</span>
        <span id="navbar-logo">Investment Calculator</span>
      </nav>
      )
  }
}

export default Navbar