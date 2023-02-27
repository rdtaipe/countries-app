import React,{useEffect,useState} from 'react';
import { useParams,useLocation,useHistory } from 'react-router-dom';
import Home from './Home/Home';
import{Route} from 'react-router-dom'
import Details from './Details/Details';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Form from './Form/Form';
import Activities from './Activities/Activities';
import Page404 from './Error/404';
import Error from './Error/Error';
import{useSelector,useDispatch} from 'react-redux'


const DefaultRoutes=[
  'landing',
  'home',
  'detail',
  'filter',
  'form',
  'activities',
  '',
]

const ErrorRoutes=[
  '404',
  'error',
]

const IfDeafaultRoute=(p)=>{
  return DefaultRoutes.map(v=>v===p)
}
const IfErrorRoute=(p)=>{
  return ErrorRoutes.map(v=>v===p)
}


function App() {
  const dispatch = useDispatch()
  const history = useHistory()
  const userType = useSelector(state => state.user.type)
  // Params
  const colors = useSelector(state => state.theme.use())
  const pages = useLocation().pathname.split('/')
  const page = useSelector(state => state.page)

  const [pageType,setPageType] = useState('')
  useEffect(() => {

    if(pages){
      pages.map((e,i)=>{
        if(IfDeafaultRoute(e)){
          setPageType(e)
        }
      })
    }else{
      setPageType(page)
    }

  if(page!=='404'&&page!=='error'){

    if(pageType!=='landing'&&page===''&&userType==='guest'){
      history.push('/landing')
    }

  }



    document.body.style.background = colors.back
  }, [page,pages])
// console.log(page,userType)
return (
    <div className="App">

     
      {page!=='form'?<Header/>:null }

      {/* Default routes*/}

      <Route exact path="/landing" component={Landing}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/activities" component={Activities}/>
      
      <Route exact path="/detail/:name" component={Details}/>
      <Route exact path="/form" component={Form}/>

      {/* error controlers */}
      {pageType==='404'&&pageType!=='error'
      ?<Page404/>:null }
      {pageType==='error'&&pageType!=='404'
      ?<Error/>:null }
      {pageType!=='error'&&!IfDeafaultRoute(pageType)
      ?<Route  path="*" component={Page404}/>
      :null }


    </div>
  );
}

export default App;


