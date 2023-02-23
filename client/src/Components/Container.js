import React from 'react'
import styled from 'styled-components'
export function Container({style,children}) {
    

    return (
        <StContainer style={style}>
            {
                children
            }
        </StContainer>
    )
}
const StContainer = styled.div`
position: relative;
width: 100%;
height: auto;
background-color: transparent;
`