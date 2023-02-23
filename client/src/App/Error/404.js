import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../../Components/Button'
import { useDispatch,useSelector } from 'react-redux'
import { Text } from '../../Components/Text'

 function Page404(props) {

    const Colors = useSelector(state => state.theme.use())
    const page = useSelector(state => state.page)
    const [webPage,setWebPage] = useState("")
    useEffect(() => {
        setWebPage(page)
    }, [page,Colors])
    

    return (
        <Container key={"404"} style={{background:Colors.background,}}>
        <h1 style={{color:Colors.btnBasic}}>404</h1>
        <Text key={"404,Page not found"} style={{color:Colors.textBasic}}>Page not found</Text>

        <Link to={"/"}> 
            <Button style={{background:Colors.btnBasic,color:Colors.btnTextBasic}}>Go Home</Button>
        </Link>
        </Container>
    )
}
export default Page404
// zIndex:webPage==="404"?"1":"-1"
const Container = styled.div`
    position: fixed;
    top:0;
    left: 0;
    right: 0;

    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        font-size:200px;
    }
`