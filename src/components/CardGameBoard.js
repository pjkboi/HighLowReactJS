import React from 'react';
import {createDeckAndDraw} from '../api';
import {CardLayout} from './Layout.components';
import ButtonsTab from './ButtonsTab';

class CardGameBoard extends React.Component{
    state = {
        cardImageUrl: null, 
        cardValue: null, 
        deckId: null,
    }

    componentDidMount = async () => {
        const {deckId, value, image} = await createDeckAndDraw();
          this.setState({
              deckId,
              cardValue: value, 
              cardImageUrl: image
          })
    }   

    render() {
        return (
            <CardLayout>
                <img src={this.state.cardImageUrl} alt="This is your card" />
                <ButtonsTab></ButtonsTab>
            </CardLayout>
        )
    }
}

export default CardGameBoard;