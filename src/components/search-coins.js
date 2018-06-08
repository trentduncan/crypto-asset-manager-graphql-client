import React from 'react';

import Coin from './coin';

import { graphql, ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'

export default class SearchCoins extends React.Component {
  constructor(props) {
      super(props);
      this.state= {
          searchTerm: '',
          searchResults: null
      }
  }
  render () {
    //  if (this.props.topQuery && this.props.topQuery.loading) {
    //     return <div>Loading</div>
    //   }
    
    //   if (this.props.topQuery && this.props.topQuery.error) {
    //     return <div>Error</div>
    //   }
    //   const coins = this.props.topQuery.top10.map((coin, index) => <Coin key={index} name={coin.name} symbol={coin.symbol} change24h={coin.change24h}/>);
    //   return (
    //     <div>
    //       <h1>Top 10</h1>
    //       <ul>
    //         {coins}
    //       </ul>
    //     </div>
    //   );
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
              {this.state.searchResults ? this.state.searchResults.map((coin, index) => <Coin key={index} name={coin.name} symbol={coin.symbol}/>) : ''}
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

// export default graphql(SEARCH_QUERY, { name: 'searchQuery' })(SearchCoins);
