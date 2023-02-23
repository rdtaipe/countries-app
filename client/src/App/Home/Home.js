
import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styled from 'styled-components';



import Video from '../../Utils/Video'
import Audio from '../../Utils/Audio';
import Cards from './Cards/Cards';


function Home(props) {
    const dispatch = useDispatch()
    const colors = useSelector(state => state.theme.use())
    const webPage= useSelector(state => state.page);


useEffect(() => {
    dispatch({type:"SET_PAGE_TYPE",payload:'home'})
    document.body.style.background = colors.back

}, [webPage,colors])


    return (
        <Container style={{background:colors.back}}>
    
            <Video  w={500}/>
        
            <Cards />

            {/* <Audio /> */}
         
        </Container>
    )
}

export default Home

const Container = styled.div`
position: absolute;
top:0;
width:100%;
height:100vh;
z-index: 0!important;
`





   



