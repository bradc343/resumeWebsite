import React, { Component } from 'react';
import BradsMenu from './BradsMenu';
import Home from './home';



import logo from './signature.svg';

class App extends Component {
  

  render() {
    let links = [
      { label: 'Home', link: 'Home', active: true },
      { label: 'Resume', link: 'Resume' },
      { label: 'Products', link: 'Products' },
      { label: 'Contact', link: 'Contact'},
    ];
    const Aux = (props) => {
      return props.children;
    };

    return (
      <Aux>
      <div className="container center">
        <BradsMenu links={links} logo={logo}/>
      </div>
      <div className="container center" style={{paddingTop: "0px"}}>
        <Home/>
      </div>
      
      </Aux>
    );
  }
}

export default App;
