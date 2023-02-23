
import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styled from 'styled-components';

import Hero from './Hero';
import View from './View';

 function Landing(props) {

    const dispatch = useDispatch()
    const Colors = useSelector(state => state.theme.use())
    const webPage= useSelector(state => state.page);


useEffect(() => {
    dispatch({type:"SET_PAGE_TYPE",payload:'landing'})

}, [webPage])
    

    return (
        <Conainer style={{background:Colors.back}}>
            <View />
            <Hero />
        </Conainer>
    )
}
export default Landing

const Conainer = styled.div`
position: relative;
width:100%;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
z-index: 0!important;
padding: 0 4%;
overflow: hidden;
`
