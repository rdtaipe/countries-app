
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {Text} from '../../Components/Text';
import {FlexCenterLeft} from '../../Components/Flex';
import {Container} from '../../Components/Container';
import { Link } from 'react-router-dom';
import { Button } from '../../Components/Button';
import { IconItem } from '../../Components/IconItem';

function Location({name,data}) {
    
    const dispatch = useDispatch();
    const colors = useSelector(state => state.theme.use());
    const [cities,setCities] = useState([]);


    useEffect(() => {
            setCities(data)

    }, [data,name,colors]);
    console.log(cities)
    const handleLoad=(e)=>{
        e.target.style.opacity=1;
        e.target.style.display="block";
    }
    return (cities.length===0?null:
        <Container>

<Box key={cities.defaulValue[0].name} >
            <FlexCenterLeft style={{marginTop:20}}>
                <Text  Styled={Title} style={{color:colors.textBasic,fontWeight:700}} >
                    {cities.defaulValue[0].name}
                </Text>
                <Text  style={{color:colors.textBasic,marginTop:10}} >
                    {cities.defaulValue[0].id}
                </Text>
              
           
            </FlexCenterLeft>
            <Text Styled={Default} style={{color:colors.textBasic}}>
                {cities.description}
            </Text>
            
        </Box>
            <Text  style={{color:colors.textBasic}}>
                Contienet: {cities.defaulValue[0].region}
            </Text>
            <Text style={{color:colors.textBasic}}>
                Capital: {cities.defaulValue[0].capital}
            </Text>
            <Text style={{color:colors.textBasic}}>
                Subregion: {cities.defaulValue[0].subregion}
            </Text>
            <Text style={{color:colors.textBasic}}>
                area: {cities.defaulValue[0].area}
            </Text>
            <Text style={{color:colors.textBasic}}>
                population: {cities.defaulValue[0].population}
            </Text>

            <Link to="/" style={{position:"absolute",right:"3%"}}>
                <Button style={{background:colors.btnBasicDesabled,color:colors.btnTextBasicDesabled}} iconLeft="chevron_left" >
                   back home
                </Button>
            </Link>

            
        </Container>
    )
}
export default Location

const Box = styled.div`
    position: relative;
    width: 100%;
    background-color: transparent;
    height:auto;
    overflow: hidden;
`
const Default= styled.p`
position: relative;
width: 100%;
padding: 10px 0;
margin-bottom: 20px;

`
const Title = styled.p`
position: relative;
padding: 10px 0;
font-size: 34px;
margin-right: 10px;
`