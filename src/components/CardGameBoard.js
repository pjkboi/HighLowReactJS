import React from 'react';
import {createDeckAndDraw} from '../api';

class CardGameBoard extends React.Component{
    state = {

    }

    componentDidMount = async () => {
        await createDeckAndDraw();
    }   

    render() {
        return (
            <div>something</div>
        )
    }
}

export default CardGameBoard;