import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Grid } from '../../Components/Grid'
import { Card } from '../../Components/Card'
import { CardContent } from '../../Components/CardContent'
import { Container } from '../../Components/Container'
import { Button } from '../../Components/Button'
import { FlexCenterRight } from '../../Components/Flex'
// http://localhost:7000/activities
export default function Activities(props) {
    const dispatch = useDispatch()
   const colors = useSelector(state => state.theme.use())


    const [activities,setActivities] = useState([])
    useEffect(() => {
        axios.get('http://localhost:7000/activities')
        .then(res => {
            setActivities(res.data)
            dispatch({type:'SET_PAGE_TYPE',payload:'activities'})
        })
    }, [])

    
    // background:colors.btnBasicDesabled,color:colors.btnTextBasicDesabled
    return (activities&&
        <Container style={{paddingTop: 70,background: colors.back,width:"100%",height:"100vh"}} >
        <Grid style={{height: "auto"}} childWidth={300} childHeight={100}>
        {
            activities.map((activity,i) => {

                return(
                    <Card key={i} style={{background:colors.btnBasicDesabled,backdropFilter:"none"}}>
                        <CardContent style={{color:"gray",}}>
                            <h2 style={{color:colors.textBasicTitle}}>{activity.name.toUpperCase()} visit to {activity.country}</h2>
                            <h2 style={{color:colors.textBasic}}>in season {activity.season}</h2>
                            <h3 style={{color:colors.textBasic}}>Date: {activity.duration.replace(",",' to ').replaceAll("-","/")}</h3>
                        </CardContent>
                    </Card>
                )
            })
        }
            
        </Grid>
<FlexCenterRight style={{height:"auto"}}>
    <Link to="/" onClickCapture={()=>{
        dispatch({type:"SET_PAGE_TYPE",payload:'home'})
    }}>
    <Button style={{marginRight: 20}} type="disabled" iconLeft="chevron_left">Back Home</Button>

    </Link>
       

</FlexCenterRight>
        </Container>
    )
}
