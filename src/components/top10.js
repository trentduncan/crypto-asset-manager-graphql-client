import React from 'react';

import Coin from './coin';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Top10 extends React.Component {
  
  render () {


      return (
          <ul>
            {console.log(this.props.topQuery.top10)}
          </ul>
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
