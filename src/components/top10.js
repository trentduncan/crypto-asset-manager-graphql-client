import React from 'react';

import Coin from './coin';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Top10 extends React.Component {
  
  render () {
     if (this.props.topQuery && this.props.topQuery.loading) {
        return <div>Loading</div>
      }
    
      if (this.props.topQuery && this.props.topQuery.error) {
        return <div>Error</div>
      }
      const coins = this.props.topQuery.top10.map((coin, index) => <Coin key={index} name={coin.name} symbol={coin.symbol} change24h={coin.change24h}/>);
      return (
        <div>
          <h1>Top 10</h1>
          <ul>
            {coins}
          </ul>
        </div>
      );
  }
}

const TOP_QUERY = gql`
  query TopQuery {
    top10(sort:rank){
    name
    change24h
    symbol
  }
  }
`

export default graphql(TOP_QUERY, { name: 'topQuery' })(Top10);
