
import styled from 'styled-components'
import { useSelector } from 'react-redux'
export function MenuItem({style,children}) {

    const colors = useSelector(state => state.theme.use());

    // colors.boxBackground
    const DefaulStyle = {
        background: colors.boxBackground
    }

    const mixStyle = {...DefaulStyle,...style,}

    return (
        <MenuItemContainer style={mixStyle}>
            {children}
        </MenuItemContainer>
    )
}
const MenuItemContainer = styled.ul`
position: relative;
list-style: none;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0;
margin: 0;
width: 100%;
height: auto;
margin:10px 0px;
border-radius: 4px;

`