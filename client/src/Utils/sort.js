
export const OrderByAtoZ= (arr) =>{

    var newArr= arr.sort((a,b) => {
        if(a.name > b.name){
            return 1
        }
        if(a.name < b.name){
            return -1
        }
        return 0
    })
    return newArr
}
export const OrderByZtoA= (arr) =>{
    var newArr= arr.sort((a,b) => {
        if(a.name < b.name){
            return 1
        }
        if(a.name > b.name){
            return -1
        }
        return 0
    })
    return newArr
}
export const OrderByMaxPopulation= (arr) =>{
    var newArr= arr.sort((a,b) => {
        if(a.population < b.population){
            return 1
        }
        if(a.population > b.population){
            return -1
        }
        return 0
    })
    return newArr
}
export const OrderByMinPopulation= (arr) =>{
    var newArr= arr.sort((a,b) => {
        if(a.population > b.population){
            return 1
        }
        if(a.population < b.population){
            return -1
        }
        return 0
    })
    return newArr
}
export const OrderByMaxArea= (arr) =>{
    var newArr= arr.sort((a,b) => {
        if(a.area < b.area){
            return 1
        }
        if(a.area > b.area){
            return -1
        }
        return 0
    })
    return newArr
}
export const OrderByMinArea= (arr) =>{
    var newArr= arr.sort((a,b) => {
        if(a.area > b.area){
            return 1
        }
        if(a.area < b.area){
            return -1
        }
        return 0
    })
    return newArr
}
