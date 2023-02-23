import React,{useState,useEffect}from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'



import { Container } from '../../Components/Container'
import { Button } from '../../Components/Button'
import { SearchBar } from '../../Components/SearchBar'
import {FlexCenterLeft} from '../../Components/Flex'
import Countries from './Countries'
import Season from './Season'
import Difficulty from './Difficulty'
import Duration from './Duration'
import Name from './Name'

function Form() {
    const dispatch = useDispatch()
    const page= useSelector(state => state.page)
    const colors = useSelector(state => state.theme.use())
    const contries= useSelector(state => state.selectedCountries)
    const [refresh,setRefresh] = useState(false)

    useEffect   (() => {
        dispatch({type:"SET_PAGE_TYPE",payload:'form'})


    },[page,contries,refresh])


    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log({
                name:e.target.name.value,
                difficulty: e.target.difficulty.value,
                duration: e.target.duration,
                season: e.target.season.value,
                countries: contries
        })
        axios.post('http://localhost:7000/activities', {
            name: e.target.name.value,
            difficulty: e.target.difficulty.value,
            duration: e.target.duration.value,
            season: e.target.season.value,
            countries: contries
        })
        .then(res => {
            console.log(res.data);
            window.location.href = '/'
            
        })
        .catch(err => {
            console.log(err);
        })

    }

    return (
        <Container style={{background: colors.back,height: "100vh"}}>
          
        <FormContainer onSubmit={HandleSubmit}>
        <h1>Form</h1>
            <FormInput>
                <Name/>
                
            </FormInput>
            <FormInput><Difficulty/></FormInput>
            <FormInput> <Duration/></FormInput>
            <FormInput><Season/></FormInput>
            <FormInput>
                <Countries contries={contries} setRefresh={setRefresh}/>
            </FormInput>
            <Button type="submit" style={{padding: "22px 24px",fontSize: 16}} iconStyle={{paddingLeft:"6px",fontSize: 25}} iconRight={"send"}>Submit</Button>
            
        </FormContainer>

        </Container>
    )
}
export default Form

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:auto;
    padding: 1% 4%;
   & input{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        padding: 0 10px;
        margin: 10px 0;
        outline: none;
    }
   & textarea{
        width: 100%;
        height: 100px;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
        outline: none;
    }
   & input[type="submit"]{
        width: 100px;
        height: 40px;
        border-radius: 5px;
        padding: 0 10px;
        margin: 10px 0;
        outline: none;
        cursor: pointer;
    }
  &  input[type="submit"]:hover{
    }
`
const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 4%;
    margin: 10px 0px;
`
