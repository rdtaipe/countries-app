import React,{ useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { SearchBar } from '../../Components/SearchBar'
import { FlexCenterLeft } from '../../Components/Flex'
import { Container } from '../../Components/Container'
import { Text } from '../../Components/Text'

function Name({message,setValue,titleStyle}) {
    const colors = useSelector(state => state.theme.use())
    
    var InputStyle={
        background:colors.boxBackground,
        border:"2px solid "+colors.btnBasic,
        color: colors.allIconsActive,
        borderRadius: "4px",
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    return (
        <Container>
           <label style={titleStyle} htmlFor="name">Insert your Name</label>
            <Input style={InputStyle} type="text" name="name" id="name" placeholder='Name'  onChange={handleChange}/> 
            <Text>{message}</Text>
        </Container>
    )
}

export default Name

const Input = styled.input`
    outline: none;
    font-size: 16px;

`