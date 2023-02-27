import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'

import { Button } from '../../Components/Button'
import { Text } from '../../Components/Text'
import Travel from '../../Assets/car.gif'
import { Link } from 'react-router-dom'
import { FlexCenterLeft } from '../../Components/Flex'

export function Ad(props) {
    
    const colors = useSelector(state => state.theme.use())
    const [activities,setActivities] = useState([])

    useEffect(() => {
        axios.get('http://localhost:7000/activities')
        .then(res => {
            setActivities(res.data)
        })
    }, [])


    return (
        <Container>
            <Text Styled={Title} style={{color: colors.textBasic}} type="h1">
                Visit all the countries of the world in a single trip, create your own route and start traveling
            </Text>

            <FlexCenterLeft Styled={AddStyle}>
                
                {activities.length>0?
                    <Link to="/activities">
                    <Button style={{marginRight:10,background:colors.btnBasicDesabled,color:colors.btnTextBasicDesabled}} iconStyle={{marginLeft:8}}>You Activities</Button>
                    </Link>
                :null}
                <Link to="/form">
                    <Button iconRight={"flag"} iconStyle={{marginLeft:8}}>Crete Activities</Button>
                    </Link>
            </FlexCenterLeft>
        </Container>
    )
}
export default Ad
const Container = styled.div`
position: relative;
background: transparent;
margin: 2% 0;
width:400px;
height:200px;
border-radius: 10px;
z-index: 0!important;
overflow: hidden;
padding: 0 20px;

`
const Title= styled.h1`

position: absolute;
font-size: 24px;
line-height: 1;
font-weight: 600;
z-index: 5;
bottom: 70px;
/* filter: invert(1)  contrast(10) saturate(10); */
mix-blend-mode: exclusion
/* padding-left: 2%; */

`


const AddStyle = styled.div`
position: absolute;
bottom: 0;
width: 100%;
height:auto;

`