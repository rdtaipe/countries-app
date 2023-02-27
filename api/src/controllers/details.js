const { Request, Response } = require('express');
const {Op} = require('sequelize')
const { Country } = require('../db.js');


const GetCountryDetail=async(req = Request, res = Response) =>{
    const name = req.params.name
	
	try{
		const defaulValue=await getCountryByName(name)
		const img = await getWikiImg(name)
		const info = await getWikiInfo(name)
		var wikibase=info.wikibase
		const data = await getWikiData(wikibase)

	
		res.send({
			...{defaulValue},
			...{img},
			...info,
			...data,
		}).status(200)
	}catch(error){
		res.status(500).send(error.message)
	}

}

module.exports={
    GetCountryDetail
}

const getWikiImg = async (city) => {
	try{
		const res =await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=images&titles=${city}&format=json`)
		const data = await res.json()
		const page = Object.keys(data.query.pages)[0]
		const images = data.query.pages[page].images
		return images.map((item)=>{
			// si contien .svg no return
		if(item.title.includes(".svg")!==true){
			return `https://commons.wikimedia.org/wiki/Special:FilePath/${item.title.slice(5)}`
		}

		})
	}catch(error){

		throw new Error(error)



	}
}

const getWikiInfo = async (city) => {
	var place=city.toLowerCase()	

	try{
		const res =await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${place}`)
		const data = await res.json()
	
		var wikibase=data.wikibase_item
		const getImg=(value)=>{
			if(data[value]===undefined){
				return ""
			}else{
				return data.thumbnail.source
			}
		}
		return({
			wikibase:wikibase,
			name:data.title,
			title:data.description,
			description:data.extract,
			thumbnail:getImg("thumbnail"),
			Image:getImg("originalimage")
		})
	}catch(error){
		return (wikibase,name,title,description,thumbnail,Image)
	}
}

const getWikiData = async (id) => {
	// console.log(id)
	try{
		const res =await fetch(`https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${id}&props=claims&format=json`)
		const data = await res.json()
		var url="https://commons.wikimedia.org/wiki/Special:FilePath/"
		const claims=(id,key)=>{
			let a=[]
			const route=()=>{
				var fix=data.entities[id].claims[key]
				if(fix!==undefined){
				return Object.values(fix)
				}else{
					return []
				}
			}
			route().map((item)=>{
				if(item["mainsnak"]!==undefined){
					if(item["mainsnak"].datavalue!==undefined){
						var v=item.mainsnak.datavalue.value 
						
							a.push(url+v)
						
					}
				
				}
			})
			return a
		
		}

	
		
		var location1=claims(id,"P242")[0]||"undefined"
		var location2=claims(id,"P242")[1]||"undefined"
		var view= claims(id,"P18")[0]||"undefined"
		
		return({
			location1,
			location2,
			view,
		})
	}catch(error){
		return({
			location1:"undefined",
			location2:"undefined",
			view:"undefined"
		})
	}
}

const getCountryByName = async (name) => {
	var value=name
	try{
		const res = await Country.findAll({
				where: {
					name:{
						[Op.iLike]: `%${value}%`
					}
				}
			})
		const data = await res.map((item)=>item.dataValues)
		return data
	}catch(error){

		return ({error})
	}
}


