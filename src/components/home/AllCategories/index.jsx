import React, { useState } from 'react'
import { BGColor, PColor } from '../../../assets/colors'
import { IconFilterOne, IconFilterTwo, IconLogo } from '../../../assets/icons'
import portfolios from '../../../data/portfolios'
import ButtonFilter from '../../filterbutton'
import { Content, Container, ContentOptionView } from './styled'
import styled from 'styled-components'
// eslint-disable-next-line
const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]
export const WrapperCategory = () => {
    // eslint-disable-next-line
    const [menuItem, setMenuItems] = useState(portfolios);
    const [button] = useState(allButtons);
    // eslint-disable-next-line
    const filter = button => {

        if (button === 'All'){
            setMenuItems(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <>
            <Container>
                <Content>
                    <ContentOptionView>
                        <button>
                            <IconFilterOne size="20px" color={PColor} />
                        </button>
                        <button>
                            <IconFilterTwo size="20px" color={PColor} />
                        </button>
                    </ContentOptionView>
                    <ButtonFilter filter={filter} button={button} />
                    <MenuItemStyled >
                        { menuItem.map(item=>{
                            return <div className="grid-item" key={item.id}>
                                <div className="portfolio-content">
                                    <div className="portfolio-image">
                                        <img src={item.image} alt=""/>
                                        <ul>
                                            <li>
                                                <ContentIcon>
                                                    <IconLogo size='50px' color={PColor} />
                                                </ContentIcon>
                                                <hr />
                                                <h6>{item.title}</h6>
                                            </li>
                                        </ul>
                                    </div>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        })
                        }
                    </MenuItemStyled>
                </Content>
            </Container>
        </>
    )
}
const MenuItemStyled = styled.div`
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
            font-family: PFont-Light;
            color: ${ BGColor };
            text-align: center;
            font-size: 20px !important;
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
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
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
                    hr {
                        width: 50%;
                        height: 1px;
                        background-color: ${ BGColor };
                        color: ${ BGColor };
                        margin: 10px auto;
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
const ContentIcon = styled.div`
    border-radius: 50%;
    width: min-content;
    justify-content: center;
    display: flex;
    background-color: ${ BGColor };
    padding: 20px;
`