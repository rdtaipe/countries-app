import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
//port 7000
//enpoint /countries
//

function Card({colors,setPagueData,setLoading}) {
    const dispatch = useDispatch()
    const pag= useSelector(state => state.pagination.page)
    const [page, setPage] = useState(0);
    const [data,setData] = useState([])
    //filter
    const getData= useSelector(state => state.sort.data)
    const sortValue= useSelector(state => state.sort.value)
    const sortFilter= useSelector(state => state.sort.filter)
    const sortOrder= useSelector(state => state.sort.order)

    const itemsPerPage = 10;


    useEffect(() => {
        setPage(pag)

        if(getData.length>0){
     
            var arr= []
            getData.map((country,i) => {
                //dividir el array en 10
                if(i%10===0){
                    //crea un nuevo array vacio dentro del array en cada 10 iteraciones
                    arr.push([])
                }
                //agrega el pais al ultimo array creado restando el array ompleto menos 1
                arr[arr.length-1].push(country)

            })
            setPagueData(arr)
            setData(arr)
            setLoading(false)
    
        }

    }, [getData,pag])

    return (
        <Container style={{background:colors.back}}>
        {data[page]!==undefined? data[page].map((country,i) => {
            
            return (
                <CardItem key={i}>
                    <CardContent>
                    <img src={country.flag} alt="flag"/>
                        <h1 style={{color:colors.textBasicTitle}}>{country.name}</h1>
                        {/* <h2 style={{color:colors.textBasic}}>Population: {country.population}</h2> */}
                        <h2 style={{color:colors.textBasic}}>Capital: {country.capital}</h2>
                        <h2 style={{color:colors.textBasic}}>Region: {country.region}</h2>

                        {/* <h2 style={{color:colors.textBasic}}>Area: {country.area}</h2> */}

                    </CardContent>
                    <CardEnd>
                    <Link to={`/detail/${country.name.includes(',')? country.name.split(',')[0]:country.name}`} >
                        
                    <BtnCreate style={{background:colors.btnBasicDesabled,color:colors.btnTextBasicDesabled}}>
                        Get Info
                    </BtnCreate>

                    </Link>
                       
                 
                    </CardEnd>
                   
                </CardItem>
            )
        }):null}
        </Container>

    )
}
export default Card

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 1rem;
grid-template-rows: auto;
justify-content: center;
align-items: flex-start;

`

const CardItem = styled.div`
/* perfect grid */
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
padding: 1rem;
text-align: center;
border-radius: 4px;
box-sizing: content-box;
flex-grow: 1;
height: 260px;
/* perfect grid */
z-index: 10;
backdrop-filter: blur(20px) saturate(200%) ;
overflow: hidden;

img{
    max-width: 170px;
    width: auto;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
}
h1{
    font-size: 1.5rem;
    font-weight: 600;
    margin: 10px 0;
}
h2{
    font-size: 1rem;
    font-weight: 400;
    margin: 10px 0;
}


`
const CardContent= styled.div`
position:  relative;
width: 100%;
height: auto;
background-color: transparent;
text-align: left;

`
const CardEnd= styled.div`
position: absolute!important;;
bottom: 10px!important;
right: 0px!important;
width: auto;
height: 50px;
background-color: transparent;
`
const BtnCreate = styled.button`
position: relative;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
border: none;
background-color: black;
color: white;
box-sizing: border-box;
font-weight: 700;
margin: 10px;
padding:0px 20px;
&:focus{
    outline: none;
}
&:hover{
    cursor: pointer;
    filter: brightness(70%) saturate(200%) contrast(120%);
    //sombra como borde
    /* box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1); */
    
}
`