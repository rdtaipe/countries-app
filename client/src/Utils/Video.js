
import React,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import globe from '../Assets/globe.mp4'
import videoLight from '../Assets/globe.mp4'


function Video({style,w}) {
    const [width, setwidth] = useState(window.innerWidth)
    const [height, setheight] = useState("auto")
    const videoRef = useRef(null)
    const theme= useSelector(state => state.theme.mode())
    const [mode,setMode] = useState(theme)
    const colors = useSelector(state => state.theme.colors[mode])

    useEffect(() => {
        setMode(theme)
        // detectar cambio de taMAÑO DE VENTANA
         if(videoRef.current){
         window.addEventListener('resize', (e) => {
             setwidth(window.innerWidth)
         })
        }
    

        //    window.addEventListener("mousemove", function(e) {
           
        //        var x = -(e.clientX -   videoRef.current.offsetWidth / 2) / 5
    
        //        var y = (e.clientY -   videoRef.current.offsetHeight / 2) / 5;
        //        var scale= e.clientY / 1000 + 0.5
        //        videoRef.current.style.transform = ` translateZ(${x-y}px) translatey(${y}px) translatex(${x}px) scale(${scale})`;
        //        videoRef.current.style.transition = "transform 3s ease";
        //        videoRef.current.style.transformStyle = "preserve-3d";
        //      });
    
        //      window.addEventListener("touchmove", function(e) {
        // //       var x = -(e.touches[0].clientX -   videoRef.current.offsetWidth / 2) / 5;
        // //       var y = (e.touches[0].clientY -   videoRef.current.offsetHeight / 2) / 5;
      
        // //       videoRef.current.style.transform = ` translateZ(${x+y}px) translatey(${y+x}px) translatex(${x+y}px)`;
        // //       videoRef.current.style.transition = "all 0.1s ease";
        // //       videoRef.current.style.transformStyle = "preserve-3d";

        //      });
         

    }, [theme])
    return (
        <Container style={style} ref={videoRef} >
          

        <video key={globe} width={width} height={height} style={{filter:mode!=="dark"?"invert(1) hue-rotate(550deg) saturate(6) grayscale(.9)":"",width:w!==undefined?w:0}}  loop autoPlay muted  >
           <source src={globe} type="video/mp4"/>
       
        </video>
        </Container>
    )
}
export default Video
const Container = styled.div`
position: fixed;
width: 100%;
height: auto;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 0;
padding-top: 50px;
border:0;
background-color: transparent;
 /* background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%);   */
& video{
    width: 500px;
    overflow: hidden;
    height: auto;
    border:0;
    filter:  contrast(0.95);
}
`

