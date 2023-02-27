import React from 'react'
import styled from 'styled-components'

export function CardContent({style,children}) {

    return (
        <Container style={{style}}>
            {children}
        </Container>
    )
}

const Container = styled.div`
position:  relative;
width: 100%;
height: auto;
background-color: transparent;
text-align: left;
`
