import React, { useEffect, useState } from 'react'
import { PColor } from '../../../assets/colors'
import { Facebook, IconGooglePlus, IconTwitter, IconYoutubeOld } from '../../../assets/icons'
import { RippleButton } from '../../Ripple'
import { Content, Container, SocialMedia, Copyright } from './styled'

export const Footer = () => {
    const [year, setYear] = useState(false)

    useEffect(() => {
        const fecha = new Date()
        setYear(fecha.getFullYear())
    }, [])
    return (
        <>
            <Container>
                <Content>
                    <RippleButton padding='10px 30px' margin='20px' bgColor={PColor} label="Show Me More" />
                    <Copyright> © {year} - Sneak All Right Reserved</Copyright>
                    <SocialMedia>
                        <a target="_blank" href="https://">
                            <Facebook color={'#c2cfd7'} size='20px' />
                        </a>
                        <a target="_blank" href="https://">
                            <IconTwitter color={'#c2cfd7'} size='20px' />
                        </a>
                        <a target="_blank" href="https://">
                            <IconGooglePlus color={'#c2cfd7'} size='20px' />
                        </a>
                        <a target="_blank" href="https://">
                            <IconYoutubeOld color={'#c2cfd7'} size='20px' />
                        </a>
                        <a target="_blank" href="https://">
                        </a>
                    </SocialMedia>
                </Content>
            </Container>
        </>
    )
}