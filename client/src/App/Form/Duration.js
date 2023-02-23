import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { SearchBar } from '../../Components/SearchBar'
import { FlexCenterLeft } from '../../Components/Flex'
import { Container } from '../../Components/Container'

export function Duration(props) {
    const theme = useSelector(state => state.theme.mode())
    const colors = useSelector(state => state.theme.use())
    
    var ContainerStyle={
        background:colors.boxBackground,
        border:"2px solid "+colors.btnBasic,
        color: colors.btnBasic,
        borderRadius: "4px",
    }
    var InputStyle={
        color: colors.btnBasic,
        maxWidth: 150,
    }

    return (
        <Container>    
            <label style={{color:colors.textBasic}} htmlFor="duration">Duration</label>
            <FlexCenterLeft style={{flexDirection: "column"}}>
                <FlexCenterLeft Styled={BoxStyleMod} style={ContainerStyle}>
                    <label htmlFor="duration">Start:</label>
                    <Input  type="date" theme={theme} style={InputStyle} name="duration" id="duration"
                        min={new Date().toISOString().split('T')[0]}
                    />
                </FlexCenterLeft>

                <FlexCenterLeft Styled={BoxStyleMod} style={ContainerStyle}>
                    <label htmlFor="duration">End:</label>
                    <Input type="date" theme={theme} style={InputStyle} name="duration" id="duration"
                    min={
                        new Date().toISOString().split('T')[0]
                    }
                    max="2023-12-31"/>
                </FlexCenterLeft>
            </FlexCenterLeft>
        </Container>
    )
}
export default Duration


const Input = styled.input`
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    
    &::-webkit-calendar-picker-indicator {
       ${props => props.theme === 'dark'?`filter: invert(.9) sepia(1) saturate(10) hue-rotate(140deg);`:null}
    }

`
const BoxStyleMod = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    height: 40px;
    border-radius: 4px;
    padding: 4px 12px;
    margin: 10px 0px;

`
