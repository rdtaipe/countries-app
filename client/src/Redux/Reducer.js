import {
    CHANGE_THEME,
    SET_INPUT_VALUE,
    SET_FILTER_TYPE,
    SET_ORDER_TYPE,
    SET_PAGE,
    
} from './Types'

// guardar datos en localStorage
const saveLocal = (key,v) => {
    try {
        const data = JSON.stringify(v)
        localStorage.setItem(key, data)
    } catch (e) {
        console.log(e)
    }
}
const getLocal = (key) => {
    try {
        const data = localStorage.getItem(key)
        return JSON.parse(data)
    } catch (e) {
        console.log(e)
    }
}

 export var initialState = {
    user:{
        type:"guest",//notLogged,guest,Logged
        username:"",
        token:"",
        user:()=>{return getLocal('user')},
        landing:()=>{return getLocal('landing')},
        status:()=>{return getLocal('status')},//logged,notLogged
        setStaus:(v)=>{saveLocal('status',v)},//logged,notLogged
        setLanding:(v)=>{saveLocal('landing',v)},
        setUser:(v)=>{saveLocal('user',v)},
    },
    theme: {
        mode:()=> {return getLocal('theme')},
        setMode:"",
        colors:{
            dark:{
                back: '#070607',
                background: '#000413',
                header: '#000413',
                barBackground: '#00032C',
                boxBackground: '#0d1a4c',
                allIcons: '#0E1D55',
                allIconsActive: '#2becff',
                btnBasic: '#5affff',
                btnTextBasic: '#000413',
                btnBasicDesabled: '#00032C',
                btnTextBasicDesabled: '#B2BAC2',
                h1: '#fff',
                textBasic:' #B2BAC2',
                textBasicTitle:'#fff',
                textMenuTitleBasic:' #2becff',
                textMenuBasic:'#fff',
                textBasicInvert:'#000413'

            },
            light:{
                back: '#fff',
                background: '#fff',
                header: '#BDBDBD',
                barBackground: '#e5e5e5',
                boxBackground: '#fff',
                allIcons: '#d3d3d3',
                allIconsActive: '#5f5f5f',
                btnBasic: '#000',
                btnTextBasic: '#fff',
                btnBasicDesabled: '#EEEEEE',
                btnTextBasicDesabled: '#000',
                h1: '#000',
                textBasic:'#000',
                textBasicTitle:'#000',
                textMenuTitleBasic:'#000',
                textMenuBasic:'#fff',
                textBasicInvert:'#fff'
            }
        },
        use:()=>{
            return initialState.theme.colors[initialState.theme.mode()]
        }
    },
    sort:{
        value:"",
        filter:"name",
        order:"all",
        data:[]

    },
    pagination:{
        page:0,
        perPage:10,
    },
    page:"",//landing,home,filter/form/404
    setPage:(v)=>{initialState.page=v},

    selectedCountries:[],

    
}
localStorage.getItem('theme')===null?saveLocal('theme','light'):null
const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case CHANGE_THEME:{
            return {
                ...state,
                theme:{
                    ...state.theme,
                    setMode:saveLocal('theme',payload)
                }
            }
        }

        case SET_PAGE:{
            return{
                ...state,
                pagination:{
                    ...state.pagination,
                    page:payload
                }
            }
        }
        case SET_INPUT_VALUE:{
            return{
                ...state,
                sort:{
                    ...state.sort,
                    value:payload
                }
            }

        }
        case SET_FILTER_TYPE:{
            return{
                ...state,
                sort:{
                    ...state.sort,
                    filter:payload
                }
            }
        }
        case SET_ORDER_TYPE:{
            return{
                ...state,
                sort:{
                    ...state.sort,
                    order:payload
                }
            }
        }
        case 'SET_PAGE_TYPE':{
            return{
                ...state,
                page:payload
            }
        }
        case 'SET_DATA':{
            return{
                ...state,
                sort:{
                    ...state.sort,
                    data:payload
                }
            }
        }
        case 'SET_SELECTED_COUNTRIES':{

            // push payload to selectedCountries in state
            let selectedCountries = state.selectedCountries
            //verificar si el pais ya esta en el PropTypes.array

            let index = selectedCountries.findIndex((item)=>item.id===payload.id)
            if(index===-1){
                selectedCountries.push(payload)
            }
            
            return{
                ...state,
                selectedCountries:selectedCountries
            }

        }
        case 'REMOVE_SELECTED_COUNTRIES':{
         
            //remover el intem seleccionado del array
            let selectedCountries = state.selectedCountries
            let index = selectedCountries.findIndex((item)=>item.id===payload.id)
            if(index!==-1){
                selectedCountries.splice(index,1)
            }          
            return{
                ...state,
                selectedCountries:selectedCountries
            }
        }

        case 'SET_USER_TYPE':{
            return{
                ...state,
                user:{
                    ...state.user,
                    type:payload
                }
            }
        }  
       
        


            
        
        default:{
            return state;
        }


    }

};

export default reducer;
