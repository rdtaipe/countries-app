import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import Pagination from './Pagination'
import Card from './Card'
import Ad from '../Ad'

//port 7000
//enpoint /countries
//


function Cards() {
    const dispatch = useDispatch()
    const theme= useSelector(state => state.theme.mode())
    const [loading,setLoading] = useState(true)
    const [mode,setMode] = useState(theme)
    const colors = useSelector(state => state.theme.use())
    const [data,setData] = useState([])
    const sortValue= useSelector(state => state.sort.value)

    useEffect(() => {

    }, [sortValue])



    return (
        <Container style={{backgroundColor:colors.back}}>
         <Ad />
         <Card colors={colors} setLoading={setLoading} setPagueData={setData} />
         <Pagination data={data} sortValue={sortValue} />
       
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


