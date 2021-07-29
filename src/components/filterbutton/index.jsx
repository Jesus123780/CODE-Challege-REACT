import React from 'react';
import styled from 'styled-components';
import { BColor, PColor } from '../../assets/colors';

function Button({ filter, button }) {
    return (
        <ButtonsStyled button={button}>
            { button.map((but, i) =>{
                return <ButtonStyled key={i} but={but} onClick={() => filter(but)}>
                    {but}
                </ButtonStyled>
            })
            }
        </ButtonsStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    padding: .4rem 2rem;
    font-size: inherit;
    color: ${ `${ BColor }e6` };
    cursor: pointer;
    /* background-color: ${ PColor }; */
    transition: all .4s ease-in-out;
    margin-bottom: .6rem;

    &:not(:last-child){
        margin-right: .6rem;
    }
`;
const ButtonsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 2.4rem auto;
`;
export default Button;