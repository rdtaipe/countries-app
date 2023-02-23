import{ useState,useEffect,useRef } from 'react'
import styled from 'styled-components'
import {IconItem} from './IconItem'
import {ListItem} from './ListItem'
import { Link } from 'react-router-dom'

export function List({ulStyle,liStyle,onClickItem,ref,data,keyName,iconName,toKeyName,to,children}) {


    return (
        <Container ref={ref} style={ulStyle}>
            {children===undefined?
            <> {data.map((item,i)=>{
                    return(to?
                    <Link to={to?to+item[toKeyName]:"/"+item[toKeyName]}  onClick={e=>{onClickItem(e,item)}}>
                                <ListItem style={liStyle} >
                                    {item[iconName]&&<IconItem icon={item.icon} style={{fontSize:"20px",margin:10}}/>}
                                    {item[keyName]}
                                </ListItem>
                                
                    </Link>

                    :
                
                    <ListItem style={liStyle} onClick={e=>{onClickItem(e,item)}}>
                    {item[iconName]&&<IconItem icon={item.icon} style={{fontSize:"20px",margin:10}}/>}
                    {item[keyName]}
                    </ListItem>
                
                    )
                })}
                </>:
                children
                
                
            }
            
        </Container>
    )
}

const Container = styled.ul`
position: relative;
width: auto;
height: auto;
border-radius: 4px;
padding: 4px;
overflow-y: auto;
overflow-x: hidden;


`
