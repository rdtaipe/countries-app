import React from 'react'
import styled from 'styled-components'
import Gif from '../../Assets/globe.gif'
import Video from '../../Utils/Video'
export default function Hero() {
    

    return (
        <Container>
          
         
        <Video style={{position:"relative"}} w={800}/>
            
        </Container>
    )
}

const Container = styled.div`
position: relative;
width:100%;
max-width: 50%;
height:auto;
display: flex;
justify-content: center;
align-items: center;
z-index: 0!important;

`
const Img= styled.img`

/* volter al reves */
width: 100%;
height: 100vh;
object-fit: cover;



`