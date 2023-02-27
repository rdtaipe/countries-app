import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import Pagination from './Pagination'
import Card from './Card'
import Ad from '../Ad'
import { Loading } from '../../../Components/Loading'

//port 7000
//enpoint /countries
//


function Cards() {
    const dispatch = useDispatch()
    const colors = useSelector(state => state.theme.use())
    const [data,setData] = useState([])
    const sortValue= useSelector(state => state.sort.value)

    useEffect(() => {

    }, [sortValue,data])


    return (
    <Container style={{backgroundColor:colors.back}}>
         <Ad />
         <Card colors={colors} setPagueData={setData} />

         {data.length > 0 && <Pagination data={data} sortValue={sortValue} />}
         
       
       </Container>

    )
}
export default Cards

const Container = styled.div`
padding-top: 60px;
padding-bottom: 70px;
margin:0 100px;

@media (max-width: 768px) {
    margin:0 20px;
    }



`


