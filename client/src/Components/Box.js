
import styled from "styled-components"

export function Box({style,children}) {
    

    return (
        <Container style={style}>
            {
                children
            }
            
        </Container>
    )
}

const Container = styled.div`
position: relative;
width: 200px;
height: 200px;
border-radius: 4px;
padding: 4px;
z-index: 20;
display: flex;
`