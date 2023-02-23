import React,{useState,useEffect,useRef, } from 'react'
//import ReactComponent


import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo}  from '../../Assets/logo.svg'

import Theme from './Theme'
import Filter from './Filter/Filter'
import { SearchBar } from '../../Components/SearchBar';

function Header() {
    const colors = useSelector(state => state.theme.use())

    return (
        <Container  >
          <Start>
            <Link to={"/"}>
            <Logo style={{fill:colors.btnBasic}}/>
            </Link>

          </Start>

          <Center>
            <SearchBar/>
            
            {/* <Link to="/"><h1 style={{color:mode==='light'?"black":"white"}}>🏠 Home </h1></Link> */}
     

          </Center>
            <End> 
           
              <Theme/> 
              <BtnCreate style={{background:colors.btnBasic,color:colors.btnTextBasic}}>Sign Up</BtnCreate>
              </End>
        </Container>
    )
}

export default Header

const Container = styled.div`
position: fixed;
top:0;
left: 0;
right: 0;
width:100%;
height:60px;
display: flex;
align-items: center;
padding: 0 50px;
backdrop-filter: blur(20px) saturate(3) brightness(.9);
z-index: 9999!important;
display: flex;
`
const End = styled.div`
position: relative;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
justify-content: flex-end;
`
const Center = styled.div`
position: relative;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Start = styled.div`
position: relative;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
justify-content: flex-start;
z-index: 10;
`
const BtnCreate = styled.button`
position: relative;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
border: none;
background-color: black;
color: white;
box-sizing: border-box;
font-weight: 700;
margin: 10px;
padding:0px 20px;
&:focus{
    outline: none;
}
&:hover{
    cursor: pointer;
}
`