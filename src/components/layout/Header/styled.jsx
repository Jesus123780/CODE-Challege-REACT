import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { PColor } from '../../../assets/colors';

export const HeaderContent = styled.header`
    flex-direction: column;
    top: 0;
    width: 100%;
    height: 80px;
    box-shadow: inset 0 -1px 0 #dcdcdc;
    z-index: 9997;
    padding: 0;
    @media only screen and (min-width: 960px){
        display: flex;
    }
`

export const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    max-width: 1366px !important;
    margin: auto;
    padding: 20px 30px;
    background-color: ${ ({ scrollNav })=>(scrollNav? 'none' : 'transparent') };
    @media only screen and (min-width: 960px){
        padding: 0 20px 0 30px;
    }
`

export const Router = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 960px){
        display: none;
    }
    & > a {
        color: ${ PColor };
        font-family: PFont-Regular;
        font-size: 12px;
    }
`

export const ContentIcon = styled.div`
    width: min-content;
    cursor: pointer;
`
export const Icon = styled.div`
    min-width: 10px;
    min-height: 10px;

`
export const ContentInput = styled.div`
  position: fixed;
  width: 400px;
  right: 100px;
  ${ props => props.showInput ? css` `: css`
    opacity: 0;
    z-index: -999;
  ` }
`
export const Enlace = styled(NavLink)`
    padding: 10px 40px;
    margin: 0px 1px;
`
export const Input = styled.input`
    outline: none;
    padding: 10px;
    border: 1px solid #ccc
`
export const ContainerBurger = styled.div`
    @media only screen and (min-width: 960px){
        display: none;
    }
    .BurgerMenu__container {
    display: flex;
    flex-direction: column;    
    span {
      background-color: ${ PColor };
      width: 30px;
      height: 2px;
      margin: 4px;
      border-radius: 1px;
      transition: all .3s ease-out;
    }
    .open:nth-child(1) {
      transform: rotate(45deg) translateY(4px) translateX(6px);

    }
    .open:nth-child(2) {
      opacity: 0;
    }
    .open:nth-child(3) {
      transform: rotate(-45deg) translateY(-7px) translateX(9px);
    }
    .close:nth-child(1) {
      transform: rotate(0) translateY(0);
    }
    .close:nth-child(2) {
      opacity: 1;
    }
    .close:nth-child(3) {
      transform: rotate(0) translateY(0);
    }
}`