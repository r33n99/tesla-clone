import React from 'react'
import styled from "styled-components"
import Section from './Section'
import data from "../data.json"

const cars = Object.values(data)

function Home() {
    return (
        <Container>
            {cars.map((el) => (
                 <Section id={el.id} key={el.id} {...el} />
            ))}
        </Container>
    )
}

export default Home


const Container = styled.div`
height: 100vh;
`
