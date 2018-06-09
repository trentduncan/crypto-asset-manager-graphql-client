import React from 'react';

import Coin from './coin';

import SearchCoins from './search-coins';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Portfolio extends React.Component {
  
  render () {
     console.log(this.props.userCoinsQuery)
     if (this.props.userCoinsQuery && this.props.userCoinsQuery.loading) {
        return <div>Loading</div>
      }
    
      if (this.props.userCoinsQuery && this.props.userCoinsQuery.error) {
        return <div>Error</div>
      }
      const coins = this.props.userCoinsQuery.userCoins.map((coin, index) => {
            return <Coin key={index} 
                         name={coin.name}
                         symbol={coin.symbol} 
                         change24h={coin.change24h} 
                         amount={coin.amount}/>});
      return (
        <div>
          <h1>User Coins</h1>
          <ul>
            {coins}
          </ul>
          <SearchCoins refetchUserCoins={() => this.props.userCoinsQuery.refetch()}/>
        </div>
      );
  }
}

const USER_COINS_QUERY = gql`
  query UserCoinsQuery {
    userCoins{
    name
    change24h
    symbol
    amount
  }
  }
`

export default graphql(USER_COINS_QUERY, { name: 'userCoinsQuery' })(Portfolio);
