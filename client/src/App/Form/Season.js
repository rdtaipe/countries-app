import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { SearchBar } from '../../Components/SearchBar'
import { FlexCenterLeft } from '../../Components/Flex'
import { Container } from '../../Components/Container'

 function Season(props) {
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
    return (
        <Container>
            <label style={{color:colors.textBasic}} htmlFor="season">Season</label>
            <FlexCenterLeft>
                   <FlexCenterLeft Styled={BoxModif} style={inputContainerStyle}>
                    <Input active={inputContainerStyleActive} type="radio" name="season" id="season" className='in' value="summer" />
                    <label htmlFor="season" style={labelContainerStyle}>Summer</label>
                 </FlexCenterLeft> 
                   <FlexCenterLeft Styled={BoxModif} style={inputContainerStyle}>
                    <Input active={inputContainerStyleActive} type="radio" name="season" id="season" className='in' value="winter" />
                    <label htmlFor="season" style={labelContainerStyle}>Winter</label>
                 </FlexCenterLeft> 
                   <FlexCenterLeft Styled={BoxModif} style={inputContainerStyle}>
                    <Input active={inputContainerStyleActive} type="radio" name="season" id="season" className='in' value="autumn" />
                    <label htmlFor="season" style={labelContainerStyle}>Autumn</label>
                 </FlexCenterLeft> 
                   <FlexCenterLeft Styled={BoxModif} style={inputContainerStyle}>
                    <Input active={inputContainerStyleActive} type="radio" name="season" id="season" className='in' value="spring" />
                    <label htmlFor="season" style={labelContainerStyle}>Spring</label>
                 </FlexCenterLeft> 
            </FlexCenterLeft>  
        </Container>
    )
}
export default Season


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