import React from 'react'
import { Link } from 'react-router-dom'
import { PColor } from '../../../assets/colors'
import { IconLogo, IconLogoLettersMovil } from '../../../assets/icons'
import { Content, HeaderContent, Overline, Router, Enlace, Icon } from './styled'
import './styles.css'

export const Menu = ({ status, setStatus }) => {
    const handleClick = () => {
        setStatus('close')
    }
    return (
        <>
            <Overline onClick={handleClick} status={status} />
            <HeaderContent status={status} >
                <Content >
                    <Router>
                        <Link to='/'>
                            <Icon>
                                <IconLogo size='70px' color={PColor} />
                                <IconLogoLettersMovil size='80px' color={PColor} />
                            </Icon>
                        </Link>

                        <Enlace exact activeClassName='active' to='/'>All</Enlace>
                        <Enlace exact activeClassName='active' to='/branding'>Branding</Enlace>
                        <Enlace exact activeClassName='active' to='/web-design'>Web</Enlace>
                        <Enlace exact activeClassName='active' to='/photography'>Photography</Enlace>
                        <Enlace exact activeClassName='active' to='/app'>App</Enlace>
                    </Router>
                </Content>
            </HeaderContent>
        </>
    )
}