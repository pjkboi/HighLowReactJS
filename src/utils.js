const cardValues = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'JACK',
    'QUEEN',
    'KING',
    'ACE'
];

const compareValues = ({previousValue, currentValue, bet}) => {
    const previousValueIndex = cardValues.indexOf(previousValue);
    const currentValueIndex = cardValues.indexOf(currentValue);

    if(previousValueIndex === -1 || currentValueIndex === -1){
        throw new Error('Value not found');
    }
    if(bet === "higher" && previousValueIndex >= currentValueIndex){
        return 'LOSE!';
    }
    if(bet === "higher" && previousValueIndex < currentValueIndex){
        return 'WIN!';
    }
    if(bet === "lower" && previousValueIndex <= currentValueIndex){
        return 'LOSE!';
    }
    if(bet === "lower" && previousValueIndex > currentValueIndex){
        return 'WIN!';
    }

};

export default compareValues;