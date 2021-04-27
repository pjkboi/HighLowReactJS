import React from 'react';
import {createDeckAndDraw, drawCardFromDeck} from '../api';
import {CardLayout} from './Layout.components';
import ButtonsTab from './ButtonsTab';
import compareValues from '../utils';

class CardGameBoard extends React.Component{
    state = {
        cardImageUrl: null, 
        cardValue: null, 
        deckId: null,
        result: null
    }

    componentDidMount = async () => {
        const {deckId, value, image} = await createDeckAndDraw();
          this.setState({
              deckId,
              cardValue: value, 
              cardImageUrl: image
          })
    }   

    onButtonClick = async ({target: {name: bet}}) => {
        this.setState({
            cardImageUrl: null
        })
        const {deckId, cardValue: previousValue} = this.state;
        const {value: currentValue, image} = await drawCardFromDeck(deckId);
        const result = compareValues({
            previousValue, 
            currentValue, 
            bet
        })

        this.setState({
            result, 
            cardValue: currentValue, 
            cardImageUrl: image
        })
    }

    render() {
        const {result, cardImageUrl} = this.state;
        if(!cardImageUrl){
            return <h1>Loading...</h1>
        }
        return (
            <CardLayout>
                <img src={this.state.cardImageUrl} alt="This is your card" />
                <ButtonsTab onButtonClick={this.onButtonClick}></ButtonsTab>
                {result && <h2>{`YOU ${result}`}</h2>}
            </CardLayout>
        )
    }
}

export default CardGameBoard;