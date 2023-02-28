
import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styled from 'styled-components';



import Video from '../../Utils/Video'
import Audio from '../../Utils/Audio';
import Cards from './Cards/Cards';

import { Loading } from '../../Components/Loading';
import { FlexCenterCenter } from '../../Components/Flex';

function Home(props) {
    const dispatch = useDispatch()
    const colors = useSelector(state => state.theme.use())
    const webPage= useSelector(state => state.page);
    const getData= useSelector(state => state.sort.data)

useEffect(() => {

    dispatch({type:"SET_PAGE_TYPE",payload:'home'})
    dispatch({type:"REMOVE_ALL_COUNTRIES",payload:[]})
}, [webPage,colors,getData])


    return (
        <Container style={{background:colors.back}}>
    
            {getData.length>0&&<Video  w={500}/>}
            {getData.length>0? <Cards />:<FlexCenterCenter><Loading/></FlexCenterCenter>}
         
         
        </Container>
    )
}

export default Home

const Container = styled.div`
position: absolute;
top:0;
width:100%;
height:100vh;
padding-top: 100px;
z-index: 0!important;
`





   



