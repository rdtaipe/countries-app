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
        e.target.style.opacity=1;
        e.target.style.display="block";
    }
 
    return (cities.length===0?null:
        <Collage >

        <BoxImg>
       
            <TrasImg key={cities.defaulValue[0].name}>
            <img key={cities.view} src={cities.view} onLoad={handleLoad}/>
            <img key={cities.img[0]} src={cities.img[0]} onLoad={handleLoad}/>
            <img key={cities[0]}  src={cities[0]}/>
            </TrasImg>
            <FixedImg style={{background:colors.background,top: "25%"}}>
                <img src={cities.location2} onLoad={handleLoad}/>
            </FixedImg>
            <FixedImg style={{background:colors.background,bottom: 0}}>
                <img src={cities.defaulValue[0].flag} onLoad={handleLoad}/>
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
  width: 100%!important;
  height: 300px!important;
  transition: opacity 0.5s;
  object-fit: cover;
  object-position: center;
  image-resolution: 300dpi;
}
& :nth-child(1){
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
    height: 100%;
    transition: opacity 0.5s;
    object-fit: cover;
}
`