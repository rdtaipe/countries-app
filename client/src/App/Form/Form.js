import React,{useState,useEffect}from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Container } from '../../Components/Container'
import { Button } from '../../Components/Button'
import { SearchBar } from '../../Components/SearchBar'
import {FlexCenterLeft} from '../../Components/Flex'
import { Text } from '../../Components/Text'
import Countries from './Countries'
import Season from './Season'
import Difficulty from './Difficulty'
import Duration from './Duration'
import Name from './Name'

function Form() {
    const dispatch = useDispatch()
    const history = useHistory()
    const page= useSelector(state => state.page)
    const colors = useSelector(state => state.theme.use())
    const contries= useSelector(state => state.selectedCountries)
    const [refresh,setRefresh] = useState(false)

    const [name,setName] = useState('')
    const [difficulty,setDifficulty] = useState(0)
    const [duration,setDuration] = useState('')
    const [season,setSeason] = useState('')

    const [nameMessage,setNameMessage] = useState('')
    const [difficultyMessage,setDifficultyMessage] = useState('')
    const [durationMessage,setDurationMessage] = useState('')
    const [seasonMessage,setSeasonMessage] = useState('')
    const [countriesMessage,setCountriesMessage] = useState('')
    const [err,setErr]=useState(false)

    const [generalMessage,setGeneralMessage] = useState('')

    const [pass,setPass] = useState(false)


    useEffect   (() => {
        dispatch({type:"SET_PAGE_TYPE",payload:'form'})

        if(pass){
            setGeneralMessage('')
            axios.post('http://localhost:7000/activities', {
                name:name,
                difficulty: difficulty,
                duration: duration,
                season: season,
                countries: contries
            })
            .then(res => {
                dispatch({type:"SET_PAGE_TYPE",payload:'home'})
                history.push('/')
            })
            .catch(err => {

                setGeneralMessage('Something went wrong, please try again later')
                setErr(true)
            
            })

        }



    },[page,contries,refresh,pass])


    const ifPass= () => {
        if(name.length < 3){
            setNameMessage('Name must be at least 3 characters long')
        }else{
            setNameMessage('')
        }
        if(difficulty === 0){
            setDifficultyMessage('Difficulty must be selected')
     
        }else{
            setDifficultyMessage('')
        }
        if(duration === ''){
            setDurationMessage('Duration must be selected')
        }else{
            setDurationMessage('')
        }
        if(season === ''){
            setSeasonMessage('Season must be selected')
        }else{
            setSeasonMessage('')
        }
        if(contries.length === 0){
            setCountriesMessage('Countries must be selected')
        }else{
            setCountriesMessage('')
        }


    }


    const HandleSubmit = (e) => {
        e.preventDefault()
        ifPass()
        setRefresh(Math.random())
        if(name.length < 3&&difficulty === 0&&duration === ''&&season === ''&&contries.length === 0){
            setPass(false)
            setGeneralMessage('the fields have not been filled in yet, please fill them in')
        }else if(name.length >3&&difficulty > 0&&duration !== ''&&season !== ''&&contries.length > 0){
            setPass(true)
            
        }

    }

    const titlesStyle={
        color:colors.textBasic,
        fontSize:23,
        fontWeight:600
    }

    return (
        <Container style={{background: colors.back,height: "100vh"}}>
          
        <FormContainer onSubmit={HandleSubmit}>
        <h1>Form</h1>
            <FormInput><Name message={nameMessage} setValue={setName} titleStyle={titlesStyle}/> </FormInput>
            <FormInput><Difficulty message={difficultyMessage} setValue={setDifficulty} titleStyle={titlesStyle}/> </FormInput>
            <FormInput> <Duration message={durationMessage} setValue={setDuration} titleStyle={titlesStyle}/> </FormInput>
            <FormInput><Season message={seasonMessage} setValue={setSeason} titleStyle={titlesStyle}/> </FormInput>
            <FormInput>
                <Countries contries={contries} setRefresh={setRefresh} message={countriesMessage} setMessage={setCountriesMessage}  titleStyle={titlesStyle}/>
            </FormInput>
            <FormInput>
            <FlexCenterLeft>
                {err==true?
                <Link to={"/"} onClickCapture={()=>{dispatch({type:"SET_PAGE_TYPE",payload:'home'})}}> 
                    <Button style={{padding: "22px 24px",fontSize: 16,paddingRight: 10}} type="disabled">Go Home</Button>
                </Link>:null
                }
            <Button type="submit" style={{padding: "22px 24px",fontSize: 16}} iconStyle={{paddingLeft:"6px",fontSize: 25}} iconRight={"send"}>Submit</Button>

            </FlexCenterLeft>
            <Text>{generalMessage}</Text>
            </FormInput>
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
