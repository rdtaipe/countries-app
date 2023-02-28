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


& video{
    transform: scale(1.3) translateX(-40px);
@media screen and (min-width: 0px) and (max-width: 399px) {
  /* Pantallas menores a 700px de ancho */
  &{
    transform: scale(3) translateY(40px) translateX(0px) 
  }
}

@media screen and (min-width: 400px) and (max-width: 799px) {
  /* Pantallas entre 700px y 799px de ancho */
  &{
    transform: scale(2) translateY(50px) translateX(0px);
  }
}
}

`
const Img= styled.img`

/* volter al reves */
width: 100%;
height: 100vh;
object-fit: cover;



`