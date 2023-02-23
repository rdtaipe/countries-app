import React,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'


function Theme(props) {
    const dispatch = useDispatch()
    const theme= useSelector(state => state.theme.mode())
    const [mode,setMode] = useState(theme)
    const colors = useSelector(state => state.theme.colors[mode])

        const toggleRef =useRef(null)
        const inputRef = useRef(null)
        const sliderRef = useRef(null)
        const toggle = toggleRef.current
        
  
  
  
        const handleToggle = (e) => {
            if(mode==='light'){
                setMode('dark')
                dispatch({type:'CHANGE_THEME',payload:"dark"})
            }else{
                setMode('light')
                dispatch({type:'CHANGE_THEME',payload:"light"})
            }
              
          }

    return (
        <>
    <Toggle ref={toggleRef} className={mode!=='light'?"active":""} onClick={handleToggle}>
        <span ref={sliderRef} className="slider"></span>
        {/* soon amogi */}
        <a className='sun'>☀️</a>
        <a className='moon'>🌙</a>
    </Toggle>
        </>
    )
}

export default Theme


const Toggle=styled.button`
position: relative;
width: 60px;
height: 30px;
display: flex;
align-items: center;
border-radius: 20px;
border: none;
background-color: black;
box-sizing: border-box;
&:focus{
    outline: none;
}
&:hover{
    cursor: pointer;
}

& span{
  position: absolute;
  left: 5px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 10px;
  z-index: 10;
  transition: left 0.2s ease;
}
& .sun{
    position: absolute;
    left: 3px;
    top: 0px;
    font-size: 20px;
    opacity: 0;
    }
& .moon{
    position: absolute;
    top: 2px;
    right: 5px;
    opacity: 1;
    font-size: 18px;
    transform: rotate(-45deg);
}
&.active{
    background-color: white;
    & span{
        left: 35px;
        width: 22px;
        height: 22px;
        background-color: black;
    }
    & .sun{
        opacity: 1!important;
    }
    & .moon{
        opacity: 0!important;
    }
}


`
