import styled from 'styled-components';
import { BGColor, PColor } from '../../../assets/colors';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    @media only screen and (min-width: 960px){
    }
`
export const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1166px !important;
    margin: auto;
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
export const ContentOptionView = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    
    @media only screen and (max-width: 960px){
        display: none;
    }
`

export const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            overflow: hidden;
            h6{
                font-size: 1.5rem;
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            ul{
                transform: translateY(-600px);
                transition: all .4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 40%;
                opacity: 0;
                li{
                        background-color: var(--border-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem;
                        border-radius: 50%;
                        width: 3rem;
                        height: 3rem;
                        margin: 0 .5rem;
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
            }

            .portfolio-image{
                &::before{
                    content: "";
                    position: absolute;
                    left: 0%;
                    top: 0%;
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                }
            }
            .portfolio-image:hover{
                ul{
                    
                    transform: translateY(0);
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .4s ease-in-out;
                    opacity: 1;
                    li{
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }

                    svg{
                        font-size: 2rem;
                    }
                }
                &::before{
                    height: calc(100%);
                    width: calc(100%);
                    background-color: ${ ` ${ PColor }` };
                        transform-origin: left;
                    
                    transition: all .4s ease-in-out;
                }
            }
        }
    }
`;