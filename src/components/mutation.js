import React from 'react';
import Coin from './coin';

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const mutationSchema = gql`
    mutation addCoin($id: Int, $symbol: String, $name: String, $amount: Float) {
        addCoin(id: $id, symbol: $symbol, name: $name, amount: $amount) {
            coins {
                name
                id
                symbol
                amount
            }
        }
    }
`

async function onSubmit(event, add, id, symbol, name, refetch) {
  event.preventDefault();
  await add({ variables: { amount: event.target.add.value, id, symbol, name } });
  refetch();
}

export default function AddCoin(props) {
    return (
        <Mutation mutation={mutationSchema}>
        {(addCoin, {data, called}) => 
            <div>
                <Coin key={props.index} name={props.name} symbol={props.symbol}/>
                <form onSubmit={(event)=> onSubmit(event, addCoin, props.id, props.symbol, props.name, props.refetchUserCoins)}>
                    <input type="text" name="add"/>
                </form>
        </div>} 
        </Mutation>
    );
}