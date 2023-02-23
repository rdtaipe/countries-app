import React,{useEffect,useState} from 'react';
import Home from './Home/Home';
import{Route} from 'react-router-dom'
import Details from './Details/Details';
import Header from './Header/Header';
import Page404 from './Error/404';
import Landing from './Landing/Landing';
import Form from './Form/Form';

import{useSelector} from 'react-redux'
function App() {

  const page = useSelector(state => state.page)
  const [webPage,setWebPage] = useState(page)

  useEffect(() => {
    setWebPage(page)

  }, [page])
  
  return (
    <div className="App">

     
      {page!=='form'?<Header/>:null }
      {/* <Header/> */}

      {page==='404'?<Page404/>:null }
      <Route exact path="/landing" component={Landing}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/detail/:name" component={Details}/>
      <Route exact path="/form" component={Form}/>
     {/* <Route  path="*" component={Page404}/>  */}


    </div>
  );
}

export default App;


{/* <div>
{location.pathname === "/" ? null : <NavBar logout={logout} onSearch={onSearch} />}
</div>
<Routes>
<Route path="/" element={<Form login={login} />}></Route>
<Route
  path="/home"
  element={<Cards characters={characters} onClose={onClose} />}
></Route>
<Route path="/about" element={<About />}></Route>
<Route path="/portfolio" element={<Portfolio />}></Route>
<Route path="/favorites" element={<Favorites characters={characters} onClose={onClose}/>}></Route>
<Route path="/detail/:detailId" element={<Detail />}></Route>
</Routes> */}

