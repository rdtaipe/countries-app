// import for get  web params+query
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCountrycities,getPlaces } from '../../Utils/Endpoints'
import {Text} from '../../Components/Text';
import {FlexCenterLeft} from '../../Components/Flex';

function Header({name,data}) {
    const dispatch = useDispatch();
    const colors = useSelector(state => state.theme.use());
    const [cities,setCities] = useState([]);
    useEffect(() => {
            setCities(data)
       

    }, [data,name,colors]);

    const handleLoad=(e)=>{
        e.preventDefault();
        e.target.style.opacity=1;
        e.target.style.display="block";
        e.target.style.width="100%";
        e.target.style.height="300px";

    }
    const handleLoadImgFixed=(e)=>{
        e.preventDefault();
        e.target.style.opacity=1;
        e.target.style.display="block";
    }


    return (cities.length===0?null:
        <Collage >

        <BoxImg>
       
            <TrasImg key={cities.defaulValue[0].name}>
            {
            String(cities.view).includes("flag")&&String(cities.view).includes(".png")&&cities.view==="undefined"?null:<img key={cities.view} src={cities.view}onLoad={handleLoad}/>
            }
            {cities.img[0]===null?null:<img key={cities.img[0]} src={cities.img[0]} onLoad={handleLoad}/>}
            {cities.img[1]===null?null:<img key={cities.img[1]} src={cities.img[1]} onLoad={handleLoad}/>}
            {cities.img[2]===null?null:<img key={cities.img[2]} src={cities.img[2]} onLoad={handleLoad}/>}
            </TrasImg>
            <FixedImg style={{background:colors.background,top: "25%",overflow:"hidden"}}>
                <img key={cities.location2} src={cities.location2} onLoad={handleLoadImgFixed}/>
            </FixedImg>
            <FixedImg style={{background:colors.background,bottom: 0}}>
                <img key={cities.defaulValue[0].flag} src={cities.defaulValue[0].flag} onLoad={handleLoadImgFixed}/>
            </FixedImg>
        </BoxImg>
        </Collage>
    )
}
export default Header;


const Collage = styled.div`
    position: relative;
    width: 100%;
 
`

const BoxImg = styled.div`
    position: relative;
    width: 100%;
    background-color: transparent;
    height: 300px;
    overflow: hidden;
`


const TrasImg = styled.div`

& img{
  position: relative;
  width: 0%;
  height: 0px;
  transition: opacity 0.5s;
  object-fit: cover;
  object-position: center;
  image-resolution: 100dpi;
  opacity: 0;
    display: none;
}

`
const FixedImg= styled.div`
position: absolute;
max-width: 200px;
max-height: 100px;
display: flex;
align-items: center;
justify-content: center;


& img{
    opacity: 0;
    display: none;
    position: relative;
    width: 100%;
    height: auto;
    transition: opacity 0.5s;
    object-fit: cover;
    object-position: center;
}
`