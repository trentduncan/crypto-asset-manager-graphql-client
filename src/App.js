import React, { Component } from 'react';

import Top10 from './components/top10';
import Portfolio from './components/portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Top10/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
