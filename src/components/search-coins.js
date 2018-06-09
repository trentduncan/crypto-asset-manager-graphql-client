import React from 'react';

// import Coin from './coin';
import AddCoin from './mutation';

import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'

export default class SearchCoins extends React.Component {
  constructor(props) {
      super(props);
      this.state= {
          searchResults: null
      }
  }
//   async onClick () {
//     const { data } = await client.query({
//         query: SEARCH_QUERY,
//         variables: { symbol: event.target.search.value }
//       });
//   }
  generateSearchResults(props) {
    return this.state.searchResults.map((coin, index) => {
    return (
        <AddCoin key={index} name={coin.name} symbol={coin.symbol} id={coin.id} refetchUserCoins={()=>props.refetchUserCoins()}/>
    );
    
    });

  }

  render () {
    return (
        <ApolloConsumer>
        {client => (
          <div>
            <form onSubmit={ async (event) => {
              event.preventDefault();
              const { data } = await client.query({
                query: SEARCH_QUERY,
                variables: { symbol: event.target.search.value }
              });
              this.setState({
                  searchResults: data.searchCoins
              })
            }}>
                <input type="text" name="search"/>
            </form>
            <ul>
              {this.state.searchResults ?  this.generateSearchResults(this.props) : ''}
            </ul>
          </div>
        )}
      </ApolloConsumer>
    )
  }
}

const SEARCH_QUERY = gql`
    query SearchQuery($symbol: String) {
        searchCoins(symbol: $symbol){
        name
        symbol
        id
    }
}
`

