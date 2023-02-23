

import React from 'react'
import styled from 'styled-components'

export function ListItem({style,children,onClick}) {
    

    return (
        <ListItemConatiner style={style} onClick={onClick}>
        {children}
        </ListItemConatiner>
    )
}
const ListItemConatiner = styled.li`
position: relative;
width: 100%;
height: 30px;
display: flex;
align-items: center;
padding: 5px;
margin: 2px;
/* pointer */
cursor: pointer;
&:hover{
    backdrop-filter: brightness(.85);
}


`