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
        <Text className="title-header" style={{color:Colors.textBasic,fontWeight:700,lineHeight: 1.2}} type="h1">Hi,<br/> data on world <br/> countries  available here</Text>
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


& .title-header{
    font-weight: 900;
    font-Size:60px;
    

    & ::before{
    display: block;
    background: transparent;
    content: "";
    width: 100%;
    height: 100px;
    filter: invert(1)  contrast(10) saturate(10) ; 
    mix-blend-mode: exclusion;
    
  }
  
  
    @media screen and (min-width: 0px) and (max-width: 399px) {
  /* Pantallas menores a 700px de ancho */
  &{
    font-Size:35px;
    
  }

 
}

@media screen and (min-width: 400px) and (max-width: 799px) {
  /* Pantallas entre 700px y 799px de ancho */
  &{
    font-Size:45px;
 
  }

}

}


`