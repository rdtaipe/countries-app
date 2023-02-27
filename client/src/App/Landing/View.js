import React from 'react'
import styled from 'styled-components'
import { useSelector ,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Text } from '../../Components/Text'
import { FlexCenterLeft } from '../../Components/Flex'
import { Button } from '../../Components/Button'
import { Link } from 'react-router-dom'

function View(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const Colors = useSelector(state => state.theme.use())
    

    return (
        <Container>
        <Text style={{color:Colors.textBasic,fontSize:60,fontWeight:600,lineHeight: 1.2}} type="h1">Hi, here have some data of the countries of the world</Text>
        <Text style={{color:Colors.textBasicTitle,fontSize:20,fontWeight:400}} type="p">Sign up before you start or exploring</Text>
        <FlexCenterLeft style={{marginTop:"50px",height: "auto"}}>
        <Button style={{marginRight: 20}} type="disabled">Sign Up</Button>
        <Link to="/" onClickCapture={()=>{
            
            dispatch({type:"SET_PAGE_TYPE",payload:'home'})
          

        }}>
        <Button iconRight="chevron_right">Go Explore</Button>
        </Link>

        

        
    </FlexCenterLeft>
        </Container>
    )
}
export default View

const Container = styled.div`
position: relative;
width:100%;

height:100vh;
display: flex;
flex-direction: column;
justify-content: center;
z-index: 1!important;



`