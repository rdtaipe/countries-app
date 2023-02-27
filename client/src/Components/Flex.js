
import styled from "styled-components"
import { MixStyledRules } from "../Utils/MixStyledRules"


export const Flex=({style,children})=>{

    return (
        <FlexContainer style={style}>
            {
                children
            }
            
        </FlexContainer>
    )

}
const FlexContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
`

export const FlexLeft = ({style,children}) => {

    return (
        <FlexLeftContainer style={style}>
            {
                children
            }
            
        </FlexLeftContainer>
    )
}
const FlexLeftContainer = styled.div`
position: relative;
width: 100%;
height: auto;
display: flex;
left: 0;
justify-content: flex-start;
`
export const FlexCenter = ({style,children}) => {

    return (
        <FlexCenterContainer style={style}>
            {
                children
            }
            
        </FlexCenterContainer>
    )
}
const FlexCenterContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`
export const FlexRight = ({style,children}) => {
    
        return (
            <FlexRightContainer style={style}>
                {
                    children
                }
                
            </FlexRightContainer>
        )
    }
const FlexRightContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
right: 0;
display: flex;
justify-content: flex-end;
`

export const FlexTop = ({style,children}) => {
        
            return (
                <FlexTopContainer style={style}>
                    {
                        children
                    }
                    
                </FlexTopContainer>
            )
        }
const FlexTopContainer = styled.div`
width: 100%;
height: 100%;
position: relative;
display: flex;
align-items: flex-start;
`
export const FlexMiddle = ({style,children}) => {
                
                    return (
                        <FlexMiddleContainer style={style}>
                            {
                                children
                            }
                            
                        </FlexMiddleContainer>
                    )
                }   
const FlexMiddleContainer = styled.div`
width: 100%;
height: 100%;
position: relative;
display: flex;
align-items: center;
`
export const FlexBottom = ({style,children}) => {
                        
                            return (
                                <FlexBottomContainer style={style}>
                                    {
                                        children
                                    }
                                    
                                </FlexBottomContainer>
                            )
                        }
const FlexBottomContainer = styled.div`
width: 100%;
height: 100%;
position: relative;
display: flex;
align-items: flex-end;
`

export const FlexCenterCenter = ({style,children}) => {

    return (
        <FlexCenterCenterContainer style={style}>
            {
                children
            }
            
        </FlexCenterCenterContainer>
    )
}
const FlexCenterCenterContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const FlexCenterTop = ({style,children}) => {
    
        return (
            <FlexCenterTopContainer style={style}>
                {
                    children
                }
                
            </FlexCenterTopContainer>
        )
    }
const FlexCenterTopContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
`
export const FlexCenterBottom = ({style,children}) => {
            
                return (
                    <FlexCenterBottomContainer style={style}>
                        {
                            children
                        }
                        
                    </FlexCenterBottomContainer>
                )
            }
const FlexCenterBottomContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-end;
`
export const FlexCenterLeft = ({Styled,style,children,onClick}) => {



        return (
            <div style={MixStyledRules(Styled,FlexCenterLeftContainer,style)} onClick={onClick}>
                {
                    children
                }
                
            </div>
        )            

}   
const FlexCenterLeftContainer =  styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
`

export const FlexCenterRight = ({style,children}) => {
                            
    return (
        <FlexCenterRightContainer style={style}>
            {
                children
            }
            
        </FlexCenterRightContainer>
    )
}
const FlexCenterRightContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
`


