import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { SearchBar } from '../../Components/SearchBar'
import { FlexCenterLeft } from '../../Components/Flex'
import { Container } from '../../Components/Container'
import { Text } from '../../Components/Text'
 function Difficulty({message,setValue,titleStyle}) {
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
    const HandleSelect = (e) => {
        setValue(e.target.value)
    }

    return (
        <Container>
            <label style={titleStyle} htmlFor="difficulty">Select Difficulty</label>
            <FlexCenterLeft style={{marginBottom: 10}}>
                { [1,2,3,4,5].map((n) => {
                    return (
                        <FlexCenterLeft Styled={BoxModif} style={inputContainerStyle}>
                            <Input active={inputContainerStyleActive} type="radio" name="difficulty" id="difficulty" className='in' value={n} onClick={HandleSelect}/>
                            <label htmlFor="difficulty" style={labelContainerStyle}>{n}</label>
                        </FlexCenterLeft>
                    )
                })}            
            </FlexCenterLeft>
            <Text>{message}</Text>  
        </Container>
    )
}

export default Difficulty


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

&.in[type="radio"]{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
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

&.in[type="radio"]:checked + label {
    color: ${props => props.active.color}!important;
    background-color: ${props => props.active.background};

}


`