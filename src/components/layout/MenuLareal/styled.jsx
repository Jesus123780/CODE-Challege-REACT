import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BGColor, PColor } from '../../../assets/colors';

export const HeaderContent = styled.div`
    position: fixed;
    transition: 1s ease;
    z-index: 99999;
    background-color: ${ BGColor };
    width: min-content;
    top: 0;
    @media only screen and (min-width: 960px){
        display: none;
    }
    ${ props => props.status === 'close'? css`
        left: -480px;
        
        `: css`
            left: 0px;
        
        ` }
`

export const Overline = styled.div`
   position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 9999;
    background-color: #24242459;
    ${ props => props.status === 'open'? css`display: block` : css`display: none;` };
    @media only screen and (min-width: 960px){
        display: none;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    width: 300px;
    height: 100vh;
`

export const Router = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all 1s ease;
    @media only screen and (min-width: 960px){
    }
    & > a {
        color: ${ PColor };
        font-family: PFont-Regular;
        font-size: 12px;
    }
`

export const Enlace = styled(NavLink)`
    padding: 10px 40px 10px 15px;
    margin: 0px 1px;
    width: 90%;
    transition: .5s ease;
    &:hover{
        padding-left: 25px;
    }
`

export const ContentIcon = styled.div`
    width: min-content;
    cursor: pointer;
`
export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`