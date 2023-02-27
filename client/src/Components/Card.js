import React from 'react'
import styled from 'styled-components'
import{useSelector} from 'react-redux'

export function Card({style,children}) {
    

    return (
        <Container style={style} className="card">
            {
            children
            }
            
        </Container>
    )
}
const Container= styled.div`
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
padding: 1rem;
text-align: center;
border-radius: 4px;
box-sizing: content-box;
flex-grow: 1;
height: 260px;
z-index: 10;
backdrop-filter: blur(20px) saturate(200%) ;
overflow: hidden;
`