export const MixStyledRules=(inserted,defaul,style)=>{
    var MixStyles =CssToObj(defaul.componentStyle.rules[0])


    if(inserted){
        MixStyles={
            ...MixStyles,
            ...CssToObj(inserted.componentStyle.rules[0])
        }

    }
  

    if(style){
        return {...objToCssJs(MixStyles),...style}
    }else{
        return objToCssJs(MixStyles)
    }

}
const CssToObj=(text)=>{
    var obj={}
    text=text.replace(/\/\*.*?\*\//g,"")//elimina los comentarios
    text.split(";").map((style)=>{
        if(style!==""){
            var styleArr=style.split(":")
            obj[styleArr[0].replace(/\s/g,"")]=styleArr[1]
        }
    })
    return obj
}

const ObjToCss=(obj)=>{
    var css=""
    for (const [key, value] of Object.entries(obj)) {
        css+=`${key}:${value};`
      }
      return css
}

const objToCssJs=(css)=>{
    var jsCss={}
    for (const [key, value] of Object.entries(css)) {

    

       
        if(key.includes("-")){
            
           

            var keyArr=key.split("-")
           
           
            var newKey=keyArr[0]
            keyArr.map((key,i)=>{
                if(i!==0){
                    newKey+=key[0].toUpperCase()+key.slice(1)
                }
            })
            jsCss[newKey]=value
        }else{
            jsCss[key]=value
        }

       

        }

    return jsCss
}