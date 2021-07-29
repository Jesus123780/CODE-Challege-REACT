import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { BGColor } from '../../assets/colors';
import './styled.css';

export const RippleButton = props => {
    const { label, onClick, style, family, standard, active } = props;
    const button = useRef(null);

    useEffect(() => {
        let mounted = true;
        const b = button.current;
        b.addEventListener('click', e => {
            const rect = button.current.getBoundingClientRect();
            const ripple = document.createElement('div');
            const width = Math.max(rect.width, rect.height) * 2;
            ripple.style.width = `${ width }px`;
            ripple.style.height = `${ width }px`;
            ripple.style.left = `${ e.clientX - rect.left - width / 2 }px`;
            ripple.style.top = `${ e.clientY - rect.top - width / 2 }px`;
            ripple.className = 'ripple';
            button.current.appendChild(ripple);

            setTimeout(() => mounted && button.current.removeChild(ripple), 1000);
        });

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <Button active={active} standard={standard} family={family} padding={ props.padding } color={ props.color } margin={ props.margin } bgColor={ props.bgColor} ref={button} onClick={onClick} className="ripple-button" style={style}>
            <span id="ripple-button-label">{label}</span>
            {props.children}
        </Button>
    );
};
const Button = styled.button`
 padding: ${ ({ padding })=> padding ? padding: '1em' };
 background-color: ${ ({ bgColor })=> bgColor ? bgColor: BGColor };
 color: ${ ({ color })=> color ? color: BGColor };
 font-family: ${ ({ family })=> family ? family: 'PFont-Light' };
 ${ ({ margin }) => !!margin && css`margin: ${ margin };` }
 ${ props=> props.active && css`border-bottom: 3px solid red;` }
`