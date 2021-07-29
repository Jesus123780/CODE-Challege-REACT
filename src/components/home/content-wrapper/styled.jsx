import styled from 'styled-components';
import { BGColor, PColor } from '../../../assets/colors';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${ `${ PColor }e6` };
    margin: auto;
    @media only screen and (min-width: 960px){
    }
`
export const Content = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1166px !important;
    margin: auto;
    @media only screen and (min-width: 960px){
    }
`
export const Title = styled.h1`
    color: ${ BGColor };
    font-family: PFont-Bold;
    font-size: 37px !important;
    text-align: center;
    letter-spacing: 10px;
    margin: 15px 0px;
    @media only screen and (min-width: 960px){
    }
    `
export const Paragraph = styled.p`
    color: ${ BGColor };
    font-family: PFont-Light;
    font-size: 18px !important;
    margin: 15px 0px;
    text-align: center;
    width: 60%;
    @media only screen and (min-width: 960px){
    }
`