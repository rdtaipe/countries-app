import React from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector } from 'react-redux'
import { SearchBar } from '../../Components/SearchBar'
import { FlexCenterLeft } from '../../Components/Flex'
import { Container } from '../../Components/Container'
import { Text } from '../../Components/Text'

 function Countries({contries,setRefresh,message,setMessage,titleStyle}) {
    const dispatch = useDispatch()
    const colors = useSelector(state => state.theme.use())
    
    var inputContainerStyle={
        background:colors.btnBasic,
        border:"2px solid "+colors.boxBackground,
        borderRadius: "4px",
    }
    var inputContainerStyleActive={
        background:colors.btnBasic,
        color:colors.boxBackground,
    }
    var labelContainerStyle={
        color:colors.allIconsActive,
        fontWeight: 500,
    }

    const handleCheck = (e) => {
        var name= e.target.parentElement.querySelector('label').innerText
        var value = e.target.parentElement.querySelector('label').getAttribute('value')
    
        dispatch({type:"REMOVE_SELECTED_COUNTRIES",payload:{id:value,name:name}})
        setRefresh(Math.random())
    }

    return (
        <Container>
                <label style={titleStyle} htmlFor="countries">Countries</label>
                <SearchBar exit={false} style={{width: "100%",border:"2px solid "+ colors.allIconsActive,margin: "10px 0px"}} Refresh={(item)=>{
                    setRefresh(Math.random())
                    if(contries.length>0){
                        setMessage('')
                    }else{
                        setMessage('Countries must be selected')
                    }
            
                }}/>
                <FlexCenterLeft style={{flexWrap: "wrap"}}>
                { contries.map((item,i)=>{
                        return(
                            <FlexCenterLeft Styled={BoxModif} style={inputContainerStyle} key={i}  onClick={handleCheck}>
                                <Input active={inputContainerStyleActive} type="checkbox" name="countries" className='in' id={item.id} checked />
                                <label  style={labelContainerStyle} htmlFor={item.id} value={item.id}>{item.name}</label>
                            </FlexCenterLeft>
                        )
                    })

                }
              </FlexCenterLeft>
              <Text>{message}</Text>  
        </Container>
    )
}
export default Countries


const BoxModif = styled.div`
    position: relative;
    width: auto;
    height: 40px;
    background: gray;
    margin-top: 10px;
    margin-right: 10px;
    overflow: hidden;
`
const Input = styled.input`
   position: relative;
    width: 100%;
    height: 100%;

&.in[type="checkbox"]{
    position: absolute;
    cursor: pointer;
    appearance: none;

}

&.in + label {
position: relative;
z-index: 10;
pointer-events: none;
background-color: ${props => props.active.color};
border: 2px solid ${props => props.active.background};
border-radius: 4px;
padding-left: 18px;
padding-right: 18px;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

} 
&.in[type="checkbox"]:checked + label{
    color: ${props => props.active.color}!important;
    background-color: ${props => props.active.background};

}

`
