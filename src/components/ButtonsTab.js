import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
`;

const Button = styled.button`
    color: white;
    background-color: ${props => props.type === "low" ? "red" : "blue"};
    padding: 16px 8px;
    border: 3px solid purple;
    border-radius: 4px;
    min-width: 60px;
`


const ButtonsTab = ({onButtonClick}) => (
    <ButtonWrapper>
        <Button name="lower" onClick={onButtonClick} type="low">Lower</Button>
        <Button name="higher" onClick={onButtonClick}>Higher</Button>
    </ButtonWrapper>
);

export default ButtonsTab;