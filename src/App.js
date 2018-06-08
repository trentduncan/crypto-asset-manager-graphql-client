import React, { Component } from 'react';

import Top10 from './components/top10';
import Portfolio from './components/portfolio';
import SearchCoins from './components/search-coins';

class App extends Component {
  render() {
    return (
      <div>
        <Top10/>
        <Portfolio/>
        <SearchCoins/>
      </div>
    );
  }
}

export default App;
