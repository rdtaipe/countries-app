
import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styled from 'styled-components';
import { useLocation,useHistory } from 'react-router-dom';

import Hero from './Hero';
import View from './View';

 function Landing(props) {
  const history=useHistory()
  const dispatch=useDispatch()
    const Colors = useSelector(state => state.theme.use())
    const pages = useLocation().pathname.split('/')
    const page = useSelector(state => state.page)
    useEffect(() => {
      dispatch({type:"SET_PAGE_TYPE",payload:'landing'})
    },[page])

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
padding-left: 4%;
padding-right: 4%;
padding-top:60px;
padding-bottom:60px;
overflow: hidden;



@media screen and (min-width: 0px) and (max-width: 399px) {
  /* Pantallas menores a 700px de ancho */
  &{
    flex-direction: column-reverse;
  }
}

@media screen and (min-width: 400px) and (max-width: 799px) {
  /* Pantallas entre 700px y 799px de ancho */
  &{
    flex-direction: column-reverse;
  }
}
`
