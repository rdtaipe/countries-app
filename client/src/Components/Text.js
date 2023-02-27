
import styled from "styled-components";
import {useSelector} from "react-redux"
import{MixStyledRules} from "../Utils/MixStyledRules"
export const Text=({Styled,style,children,type,key})=>{
    const colors = useSelector(state => state.theme.use())

    const Default={
        color:colors.textBasic,
    }
    const Mix={...MixStyledRules(Styled,DefaultStyled),...Default,...style}


        return (
            <p key={key} style={Mix}>
                {
                    children
                }
                
            </p>
        )

}

const DefaultStyled=styled.p`
position: relative;
font-weight: 400;
line-height: 1.5;
height: auto;
color: #212529;
text-align: left;
margin: 0;
padding: 0;
`
