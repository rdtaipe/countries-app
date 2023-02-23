import React from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import { Button } from '../../Components/Button'
import { Text } from '../../Components/Text'
import Travel from '../../Assets/car.gif'
import { Link } from 'react-router-dom'

export function Ad(props) {
    
    const colors = useSelector(state => state.theme.use())
    

    return (
        <Container>
            <img src={Travel} alt="travel" />
            <Text Styled={Title} type="h1">
                Visit all the countries of the world in a single trip, create your own route and start traveling
            </Text>
         
            <Link to="/form">
            <Button iconRight={"flag"} >Crete You Route</Button>
            </Link>
        </Container>
    )
}
export default Ad
const Container = styled.div`
position: relative;
background: red;
margin: 2% 0;
width:400px;
height:200px;
border-radius: 10px;
z-index: 0!important;
overflow: hidden;
padding: 0 20px;

& img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    z-index: -1;

}
& button{
    position: absolute;
    bottom: 0;
    padding: 24px ;
}
`
const Title= styled.h1`

position: absolute;
font-size: 24px;
line-height: 1;
font-weight: 600;
z-index: 5;
bottom: 70px;
filter: invert(1)  contrast(10) saturate(10);
mix-blend-mode: exclusion
/* padding-left: 2%; */

`