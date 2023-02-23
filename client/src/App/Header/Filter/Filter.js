import React,{useState,useEffect,createRef, useRef, } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import {OrderByAtoZ,OrderByZtoA, OrderByMaxPopulation, OrderByMinPopulation,OrderByMaxArea,OrderByMinArea,} from '../../../Utils/sort'
import {IconItem} from '../../../Components/IconItem'
import { FlexCenterLeft, FlexCenterCenter, FlexCenterRight } from '../../../Components/Flex'
import { Box } from '../../../Components/Box'
import { List } from '../../../Components/List'
import {MenuItem} from '../../../Components/MenuItem'
import { FlexLeft ,FlexRight } from '../../../Components/Flex'
import {Text} from '../../../Components/Text'
import {ListItem} from '../../../Components/ListItem'

const orderIcons =[
    {icon:"sort_by_alpha",v1:"az",v2:"za",text1:"A to Z" ,text2:"Z to A"},
    {icon:"monitoring",v1:"maxPop",v2:"minPop",text1:"Max Population",text2:"Min Population"},
    {icon:"area_chart",v1:"maxArea",v2:"minArea",text1:"Max Area",text2:"Min Area"},
    {icon:"all_inclusive",v1:"all",v2:"all",text1:"All | Default",text2:"All | Default"},
]

const filterIcons =[
    {icon:"history_edu",name:"name",text:"Country Name"},
    {icon:"code",name:"id",text:"Code id"},
    {icon:"map",name:"region",text:"Region"},
    {icon:"location_city",name:"capital",text:"Capital"},
]
const filterTypeUrl =(key,value) =>{

    if(key==='all'){
        return axios.get('http://localhost:7000/countries')
    }else{
      return  axios.get(`http://localhost:7000/countries/filter/${key}?=${value}`)
    }
}
const sort= (arr,order) =>{
    arr.then(res => {
     var arr= res.data
     if(order==='all'){
        return arr
   
     }else if(order==='az'){
            return OrderByAtoZ(arr)
        }else if(order==='za'){
            return OrderByZtoA(arr)
        }else if(order==='maxPop'){
            return OrderByMaxPopulation(arr)
        }else if(order==='minPop'){
            return OrderByMinPopulation(arr)
        }else if(order==='maxArea'){
            return OrderByMaxArea(arr)
        }else if(order==='minArea'){
            return OrderByMinArea(arr)
        }
    
    })
    .then(res => {
        return res
    })

    return arr

  
}
  

function Filter() {
    const dispatch = useDispatch()
    const webPage= useSelector(state => state.page);
    const [menuFilter,setMenuFilter] = useState(false)//filter

    const colors = useSelector(state => state.theme.use())
    const filterType= useSelector(state => state.sort.filter)
    
    const [currentFilterIcon,setCurrentFilterIcon]= useState("history_edu")
    const [currentOrderIcon, setCurrentOrderIcon] = useState("all_inclusive")
    const [parameters,setParameters] = useState()
    const [filterIconTarget,setFilterIconTarget] = useState()
    const prmtrIcoRef = useRef()

    const [input,setInput] = useState('')
    const [data,setData] = useState([])
    //filter
    const sortFilter= useSelector(state => state.sort.filter)
    const sortOrder= useSelector(state => state.sort.order)
    const inputRef = useRef()

    const typeOrder = useSelector(state => state.sort.order)
 
    const [order,setOrder] = useState("all")
    
    const Order=(item)=>{
        if(typeOrder===item.v1){
            dispatch({type:"SET_ORDER_TYPE",payload:item.v2})
            setOrder(item.v1)
        }else{
            dispatch({type:"SET_ORDER_TYPE",payload:item.v1})
            setOrder(item.v1)
        }

    }

    useEffect(() => {
        setFilterIconTarget(prmtrIcoRef.current)

        sort(filterTypeUrl(sortFilter,input),sortOrder)
        
        .then(res => {
            var value= res.data
           dispatch({type:"SET_DATA",payload:value})
           setData(value)
        })
        if(input.length>0){
            setMenuFilter(false)
        }

        window.addEventListener('click', () => {
            setInput('')
            dispatch({type:"SET_INPUT_VALUE",payload:""})
            inputRef.current.value=''
        })
    
        changeInputStyle()
    }, [input,colors,prmtrIcoRef,sortFilter,sortOrder,filterType,typeOrder,order])



    const showFilterFunc = () => {
        setMenuFilter(!menuFilter)

    }
    const handleInput = (e) => {
        setInput(e.target.value)
        dispatch({type:"SET_INPUT_VALUE",payload:e.target.value})
    }


    const changeInputStyle = () => {
    
        const input = inputRef.current
        
        const style = document.createElement('style');
        style.innerHTML = `::placeholder{color:${ colors.allIconsActive}}`
        input.appendChild(style)

    }






    const setOrderIcon= (item)=>{
       
        setCurrentOrderIcon(item.icon)
        dispatch({type:"SET_ORDER_TYPE",payload:item.name})
        Order(item)
        setShow(false)
        console.log(item)
    }
    const setFilterIcon= (item)=>{
        setCurrentFilterIcon(item.icon)
        dispatch({type:"SET_FILTER_TYPE",payload:item.name})
        setShow(false)
    }
    //dinamic style
    var TextStyle={color:colors.textMenuTitleBasic,fontWeight:600,fontSize:20,paddingLeft: 15}

    return (
        <Box style={{background:colors.boxBackground,width:400,height:40}}>
            <FlexCenterLeft style={{width: "40px",}}>
                <IconItem icon={"search"} style={{color:colors.allIconsActive,padding: 8,fontSize:24}}/>
            </FlexCenterLeft>
            
            <FlexCenterLeft>
                <Input ref={inputRef} className="inputChangeColor" style={{color:colors.allIconsActive}}   placeholder='Buscar Pais' onChange={handleInput}>
                </Input>
            </FlexCenterLeft>
                
            <FlexCenterRight>
                {webPage==='home'&&   <IconItem icon={currentOrderIcon} style={{fontSize:"16px",marginRight:5,marginTop:8,color:colors.allIconsActive}}/> }
                <IconItem icon={currentFilterIcon} style={{fontSize:"16px",marginRight:-8,marginTop:8,color:colors.allIconsActive}}/> 
                <IconItem ref={prmtrIcoRef} onClick={showFilterFunc} icon="tune" style={{fontSize:24,padding:8,marginLeft:8,color:colors.allIconsActive,zIndex: 999}}/> 
            </FlexCenterRight>
            
         
            {menuFilter===true?   
            <FlexRight  style={{position:"absolute",top:35}}>
            <MenuItem style={{width:200,height:"auto",background:colors.boxBackground,position:"absolute",padding:"10px 0px"}}>
                    <Text style={TextStyle} >Order By</Text>
                    <List>
                    {webPage==='home'&&<>{ orderIcons.map((item,i)=>{
                    return(
                        <ListItem style={{color:colors.textMenuTitleBasic}} onClick={()=>{setOrderIcon(item)}}>
                            <IconItem icon={item.icon} style={{fontSize:"20px",margin:10}}/> 
                            {
                            typeOrder===item.v1||order===item.v2?item.text2:item.text1
                            
                            }
                        </ListItem>
                    )
                })}
                </>
                }
                    </List>
                    <Text style={TextStyle} >Order By</Text>
                    <List 
                    show={true} 
                    data={filterIcons} 
                    keyName="text" 
                    liStyle={{color:colors.allIconsActive}}
                    iconName="icon"
                    onClickItem={(e,item)=>setFilterIcon(item)}
                    />
                </MenuItem>
            </FlexRight>:null}



           {input.length>0&&webPage!=="home"?
           <FlexLeft  style={{position:"absolute",top:35}}>
            <MenuItem style={{maxHeight:200}}>
                    <List 
                    show={true} 
                    data={data} 
                    keyName="name" 
                    ulStyle={{background:colors.boxBackground,width:400}}
                    liStyle={{color:colors.allIconsActive}}
                    to="/detail/"
                    toKeyName="name"
                    />
                </MenuItem>
            </FlexLeft>
            :null}
       
        </Box>
    )
}

export default Filter


const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #5F5F5F;
    font-size: 16px;
    font-weight: 500;
    margin-top: 3px;

`