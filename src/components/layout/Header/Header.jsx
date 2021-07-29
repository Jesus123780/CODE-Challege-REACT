import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PColor } from '../../../assets/colors'
import { IconLogo, IconLogoLetters, IconSearch } from '../../../assets/icons'
import { Menu } from '../MenuLareal/Header'
import { Content, HeaderContent, Router, ContentIcon, ContainerBurger, Icon, Input, ContentInput, Enlace } from './styled'
import './styles.css'

export const Header = () => {
    const [status, setStatus] = useState('close')
    useEffect(() => {
        const body = document.body
        body.addEventListener('keyup', e => e.code === 'Escape' && setStatus('close'))
        return () => body.removeEventListener('keyup', () => setStatus)
    }, [setStatus])
    const location = useLocation()
    useEffect(() => {
        setStatus('close')
    }, [location]);
    return (
        <div>
            <HeaderContent >
                <Content >
                    <ContainerBurger >
                        <div className="BurgerMenu__container" role="button" onClick={() => { setStatus(status === 'open' ? 'close' : 'open') }} >
                            <span className={status}></span>
                            <span className={status}></span>
                            <span className={status}></span>
                        </div>
                    </ContainerBurger>
                    <Menu setStatus={setStatus} status={status} />
                    <Icon>
                        <Link to='/'>
                            <IconLogo size='50px' color={PColor} />
                            <IconLogoLetters size='50px' color={PColor} />
                        </Link>
                    </Icon>
                    <>
                        <Router>
                            <Enlace exact activeClassName='active' to='/'>All</Enlace>
                            <Enlace exact activeClassName='active' to='/branding'>Branding</Enlace>
                            <Enlace exact activeClassName='active' to='/web-design'>Web</Enlace>
                            <Enlace exact activeClassName='active' to='/photography'>Photography</Enlace>
                            <Enlace exact activeClassName='active' to='/app'>App</Enlace>
                        </Router>
                        <ContentInput>
                            <Input placeholder='Buscar...' />
                        </ContentInput >
                        <ContentIcon >
                            <IconSearch size='20px' color={PColor} />
                        </ContentIcon>
                    </>
                </Content>
            </HeaderContent>
        </div>
    )
}