import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import {ReactComponent as arrowIcon}  from '../../../Assets/next.svg'
function Pagination({data,setData,sortValue}) {
    const dispatch = useDispatch()
    const theme= useSelector(state => state.theme.mode())
    const [mode,setMode] = useState(theme)
    const colors = useSelector(state => state.theme.colors[mode])
    const pag= useSelector(state => state.pagination.page)
    const [currentData, setCurrentData] = useState([]);
    const [page, setPage] = useState(pag);
    const [showPoints, setShowPoints] = useState("last")//first,last,all,none


    useEffect(() => {
        setMode(theme)
        setPage(pag)
        var arr= []
        data.map((_,i) => {
            arr.push(i+1)
        })
        setCurrentData(arr)
        showPointsFunc(arr,pag)
    }, [data,pag,theme,sortValue])



  const setPageNum=(v)=>{
    dispatch({type:'SET_PAGE',payload:v})
  }
    
    const next = () => {
        if(page < data.length-1){
            setPage(page+1)
            setPageNum(page+1)
        }

    }
    const previews = () => {
        if(page > 0){
            setPage(page-1)
            setPageNum(page-1)
        }
    }
    const last=()=>{
        setPage(data.length-1)
        setPageNum(data.length-1)
    }
    const first=()=>{
        setPage(0)
        setPageNum(0)
    }
    const active = (i) => {
        setPage(i)
        setPageNum(i)
    }
    const moment = () => {
        var c=4
        var arr=[]
        


    }
    const fixedData=(arr, n)=>{
        var newArr = []
        var addfirst = 0
        var addlast = 0
        const firstCondition = (n-1)==-1?0:(n-1)
        const lastCondition = (n+2)>arr.length?arr.length:(n+2)
        switch (n) {
        case -1:{addlast = 3 }break;
        case 0:{ addlast = 3}break;
        case 1:{addlast = 2 }break;
        case 2:{addlast = 1 }break;
        default:{addlast = 0}break;
        }
        switch (n) {
            case arr.length-3:{addfirst = -1}break;
        case arr.length-2:{addfirst = -2}break;
        case arr.length-1:{ addfirst = -3}break;
        }
       
        for (let i =firstCondition+addfirst; i < lastCondition+addlast; i++) {
            newArr.push(arr[i])
        }
        return newArr

    }
    const showPointsFunc = (arr,n) => {
        var s=3
        var total=arr.length

        if(total>10){
            if(n<s){//menor a 4
                setShowPoints("last")
            }else if(n>=s&&total-s>n){//mayor a 4
                setShowPoints('all')
            }else if(n>total-s-1 ){//mayor a 21
                setShowPoints('first')
            }


        }else{
            setShowPoints("none")
        }
    }
    // console.log(showPoints)

    return (
        <Conatiner >
            <PaginationBar>
            <ArrowLast style={{color:colors.allIconsActive}} onClick={previews}> ▲ </ArrowLast>
            <FirstBtn style={{background:colors.allIcons,color:colors.allIconsActive}} className={`n-pag ${page===0?"active":""} ${mode==="dark"?"dark":""}`} onClick={first}>
               {currentData[0]}
            </FirstBtn>

            {showPoints==="all"||showPoints==='first'&&showPoints!=='none'?<Points style={{color:colors.allIconsActive}}>...</Points>:null}
            
            {fixedData(currentData,page).map((v,i)=>{
                if(v!=1&&v!=currentData[currentData.length-1]){
                    return (
                        <Btn key={i} style={{background:colors.allIcons,color:colors.allIconsActive}} className={`n-pag ${page===v-1?"active":""} ${mode==="dark"?"dark":""}`} onClick={()=>active(v-1)}>
                            {v}
                        </Btn>
                    )
                }   
            })
            }

         {showPoints==="all"||showPoints==='last'&&showPoints!=='none'?<Points style={{color:colors.allIconsActive}}>...</Points>:null}
       

        <LastBtn style={{background:colors.allIcons,color:colors.allIconsActive}} className={`n-pag ${page===data.length-1?"active":""} ${mode==="dark"?"dark":""}` } onClick={last}>
             {currentData[currentData.length-1]}
        </LastBtn>

        <ArrowNext style={{color:colors.allIconsActive}} onClick={next}> ▲ </ArrowNext>

        </PaginationBar>
        </Conatiner>
    )
}
export default Pagination

const Conatiner = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(20px) saturate(3) brightness(.9);

z-index: 99;

& .n-pag.active{
    background-color: #5f5f5f !important;
    color: #fff !important;

   
}
& .n-pag.active.dark{
    background-color: #2becff  !important;
    color: #000413 !important;
}

`
const PaginationBar = styled.div`
width: 400px;
display: flex;
align-items: center;
`



const Points = styled.div`
width: 30px;
height: 30px;
border-radius: 100%;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
font-weight: 900;
margin: 5px;
font-size: 10px;
user-select: none;
`
const ArrowLast = styled.button`
width: 30px;
height: 30px;
border-radius: 100%;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
font-weight: 900;
border: none;
user-select: none;
transform: rotate(-90deg);
font-size: 18px;
color: gray;
`
const ArrowNext = styled.button`
width: 30px;
height: 30px;
border-radius: 100%;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
font-weight: 900;
border: none;
user-select: none;
transform: rotate(90deg);
font-size: 18px;
color: gray;
`
const Btn = styled.div`
width: 30px;
height: 30px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 5px;
user-select: none;
font-weight: 700;
`
const LastBtn = styled.button`
width: 30px;
height: 30px;
border-radius: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 5px;
border: none;
user-select: none;
font-weight: 700;
`
const FirstBtn = styled.button`
width: 30px;
height: 30px;
border-radius: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 5px;
border: none;
user-select: none;
font-weight: 700;
`