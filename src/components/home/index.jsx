import React from 'react'
import { WrapperCategory } from './AllCategories'
import { Wrapper } from './content-wrapper'
import { Container } from './styled'

export const Home = () => {
    return (
        <Container>
            <Wrapper />
            <WrapperCategory />
        </Container>
    )
}