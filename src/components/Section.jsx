import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section({title,description,image,arrow,leftButton,rightButton,id}) {
    return (
        <div id={id}>
        <Wrap bgImg={image} >
        <Fade bottom>
        <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
            <Buttons>
        <Fade bottom>
            <ButtonGroup>
               <LeftButton>
                   {leftButton}
               </LeftButton>
               {rightButton &&  <RightButton>
                   {rightButton}
               </RightButton> }
            </ButtonGroup>
            </Fade>
            {arrow &&  <DownArroW src="/images/down-arrow.svg" />}
            </Buttons>
        </Wrap>
        </div>
    )
}

export default Section


const Wrap = styled.div`
width: 100%;
height: 100vh;
background-image: ${prop => `url(/images/${prop.bgImg})`};
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom: 30px;
@media (max-width: 768px) {
    flex-direction: column;
}

`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    &:hover {
        background-color: #666666;
    }
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArroW = styled.img`
margin-top: 20px;
height: 40px;
overflow: hidden;
animation: animateDowm infinite 1.5s;
`

const Buttons =styled.div`
`