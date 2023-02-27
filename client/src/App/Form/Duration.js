import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { SearchBar } from '../../Components/SearchBar'
import { FlexCenterLeft } from '../../Components/Flex'
import { Container } from '../../Components/Container'
import { Text } from '../../Components/Text'

export function Duration({message,setValue,titleStyle}) {
    const theme = useSelector(state => state.theme.mode())
    const colors = useSelector(state => state.theme.use())

    const [start,setStart] = useState(null)
    const [end,setEnd] = useState(null)

  
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

    const HandleChangeStart = (e) => {
            setStart(e.target.value)
    }
    const HandleChangeEnd = (e) => {
        setEnd(e.target.value)
    }
    useEffect(() => {
        if(start && end) {
            setValue([start,end])
        }else{
            setValue('')
        }
    },[start,end,message])
    return (
        <Container>    
            <label style={titleStyle} htmlFor="duration">Duration</label>
            <FlexCenterLeft style={{flexDirection: "column"}}>
                <FlexCenterLeft Styled={BoxStyleMod} style={ContainerStyle}>
                    <label htmlFor="duration">Start:</label>
                    <Input   type="date" theme={theme} style={InputStyle} name="duration" id="duration"
                        min={new Date().toISOString().split('T')[0]}
                        onChange={HandleChangeStart}
                       
                    />
                </FlexCenterLeft>

                <FlexCenterLeft Styled={BoxStyleMod} style={ContainerStyle}>
                    <label htmlFor="duration">End:</label>
                    <Input type="date" theme={theme} style={InputStyle} name="duration" id="duration"
                    min={
                        new Date().toISOString().split('T')[0]
                    }
                    max="2023-12-31"
                    onChange={HandleChangeEnd}
                    />
                </FlexCenterLeft>
            </FlexCenterLeft>
            <Text>{message}</Text>  
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
