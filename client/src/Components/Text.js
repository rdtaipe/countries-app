
import styled from "styled-components";
import{MixStyledRules} from "../Utils/MixStyledRules"
export const Text=({Styled,style,children,type,key})=>{

    const Component=()=>{
        return (
            <p key={key} style={MixStyledRules(Styled,DefaultStyled,style)}>
                {
                    children
                }
                
            </p>
        )
}
        return Component()
 
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
