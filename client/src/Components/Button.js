import styled from 'styled-components'
import{useSelector} from 'react-redux'

export function Button({style,onClick,children,type,iconLeft,iconRight,iconStyle}) {
    const Colors = useSelector(state => state.theme.use())
    const ContainerStyle = {
        background:type!=="disabled"?Colors.btnBasic:Colors.btnBasicDesabled,
        color:type!=="disabled"?Colors.btnTextBasic:Colors.btnTextBasicDesabled,
        fontWeight: 900,

    }
    const iconDefauldStyle= {
        margin: 0,
        padding: 0,
        fontSize: "auto"

    }
    const ContainerMix= {...style,...ContainerStyle }
    const iconStyleMix = {...iconStyle,iconDefauldStyle}


    return (
        <Container style={ContainerMix} onClick={onClick} type={type}>
            {iconLeft&&<span style={iconStyleMix} className="material-symbols-rounded IconItem">{iconLeft}</span> }

            {
                children
            }
            {iconRight&&<span style={iconStyleMix} className="material-symbols-rounded IconItem">{iconRight}</span> }
            
        </Container>
    )
}


const Container = styled.button`
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
margin: 10px 0;
padding:0px 14px;
&:focus{
    outline: none;
}
&:hover{
    cursor: pointer;
    filter: brightness(.8) saturate(2);
}
`