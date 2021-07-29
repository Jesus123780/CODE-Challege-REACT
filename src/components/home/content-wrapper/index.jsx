import React from 'react'
import { PColor } from '../../../assets/colors'
import { RippleButton } from '../../Ripple'
import { Content, Title, Container, Paragraph } from './styled'

export const Wrapper = () => {
    return (
        <>
            <Container>
                <Content>
                    <Title>EXPLORE BEYOND HORIZON</Title>
                    <Paragraph>Magna mundi referrentur quo, no rebum dignissim qui. Per quodsi accusata id, agam labores.</Paragraph>
                    <RippleButton padding='10px 30px' margin='50px' color={PColor} label="VIEW OUR WORK" />
                </Content>
            </Container>
        </>
    )
}