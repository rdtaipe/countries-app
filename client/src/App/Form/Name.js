import React,{ useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { SearchBar } from '../../Components/SearchBar'
import { FlexCenterLeft } from '../../Components/Flex'
import { Container } from '../../Components/Container'

function Name(props) {
    const colors = useSelector(state => state.theme.use())
    const [input,setInput] = useState('')
    
    var InputStyle={
        background:colors.boxBackground,
        border:"2px solid "+colors.btnBasic,
        color: colors.allIconsActive,
        borderRadius: "4px",
    }

    
    
    return (
        <Container>
           <label style={{color:colors.textBasic}} htmlFor="name">Name</label>
            <Input  style={InputStyle} type="text" name="name" id="name" placeholder='Name' /> 
        </Container>
    )
}

export default Name

const Input = styled.input`
    outline: none;
    font-size: 16px;

`