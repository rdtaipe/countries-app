// import for get  web params+query
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCountrycities,getDetail } from '../../Utils/Endpoints'
import Header from './Header';
import Location from './Location';

function Detail(props) {
    const { name } = useParams();
    const dispatch = useDispatch();
    const colors = useSelector(state => state.theme.use());
    const [place, setPlace] = useState([]);


    useEffect(() => {
        dispatch({type:"SET_PAGE_TYPE",payload:'detail'})
        getDetail(name).then(res => {
            setPlace(res.data)
        }).catch(err => {
            dispatch({type:"SET_PAGE_TYPE",payload:"404"})
            console.log(name)
        })

    }, [name,colors]);
    return (
        <Container style={{background:colors.background}}>
            <Header name={name} data={place} />
            <Location name={name} data={place} />
        </Container>
    )
}
export default Detail
const Container = styled.div`
padding: 0 3% ;
position: fixed;
padding-top: 60px;
width: 100%;
height: 100%;
overflow-y: auto;
overflow-x: hidden;
z-index: 0!important;
`
// calc(100% - 120px)

