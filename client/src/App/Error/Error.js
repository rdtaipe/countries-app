import React from 'react'
import { useEffect,useState } from 'react'

import { useSelector,useDispatch } from 'react-redux'
import {Link}from 'react-router-dom'
import { FlexCenterCenter } from '../../Components/Flex'
import {Button} from '../../Components/Button'

 function Error(props) {
    
    const colors = useSelector(state => state.theme.use())
    const page = useSelector(state => state.page)

    useEffect(() => {
    }, [colors,page])
    

    return (
        <FlexCenterCenter style={{height:"100vh",background:colors.back,flexDirection: "column",color:colors.textBasic}}>
            <h1 style={{color:colors.textBasicTitle,marginBottom:20}}>Server Error</h1>
            Error occurred on the page, please refresh the page
            <Button style={{background:colors.btnBasic,color:colors.btnTextBasic,marginTop:20}}
            onClick={() => {window.location.reload()
                dispatch({type:"SET_PAGE_TYPE",payload:'home'})
            }}
            >Reload</Button>
        

        </FlexCenterCenter>
    )
}

export default Error