import styled from 'styled-components';
import { BGColor, PColor } from '../../../assets/colors';

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1166px !important;
    margin: auto;
    padding: 30px 10px;
    @media only screen and (min-width: 960px){
    }
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${ `${ BGColor }` };
    margin: auto;
    @media only screen and (min-width: 960px){
    }
    `
export const SocialMedia = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        width: 20%;
        @media only screen and (min-width: 960px){
        }
    `
export const Copyright = styled.p`
        color: #646464;
        font-size: 13px;
        margin: 60px;
        text-align: center;
        @media only screen and (min-width: 960px){
        }
        & > span {
            color: ${ PColor };
        }
    `