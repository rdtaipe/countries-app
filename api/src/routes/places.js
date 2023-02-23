const { Router } = require('express');
const {Op} = require('sequelize')
const { Country } = require('../db.js');
const router= Router();

router.get('/:place', async (req, res) => {
	const place = req.params.place

	// console.log(place)
	
	try{
		const defaulValue=await getCountryByName(place)
		// var iso=defaulValue[0].iso
		//console.log(defaulValue)
		const img = await getWikiImg(place)
		//  console.log(img)
		const info = await getWikiInfo(place)
		// var wikibase=info.wikibase
		//  console.log(wikibase)
		// const data = await getWikiData(wikibase)
		// //  console.log(data)
		// const cities = await getCitiesByIso(iso)
		// console.log(place,capital)
		const pixels=await getPixelsImg(place)
	
		res.send({
			...{defaulValue},
			...{img},
			...info,
			...pixels
		}).status(200)
	}catch(error){
		res.status(500).send(error.message)
	}


});


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
		return ([])

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
			// var route=Object.values(data.entities[id].claims[key])||[]
			// console.log(data)

				var fix=data.entities[id].claims[key]
				if(fix!==undefined){
				return Object.values(fix)
				}else{
					return []
				}
			}
		//  console.log(id,key,route())
		
			route().map((item)=>{
				if(item["mainsnak"]!==undefined){
					if(item["mainsnak"].datavalue!==undefined){
						var v=item.mainsnak.datavalue.value 
						
							a.push(url+v)
						
					}
				
				}
			})
			// console.log(a,key)
			return a
		
		}

	
		
		var location1=claims(id,"P242")[0]||"undefined"
		var location2=claims(id,"P242")[1]||"undefined"
		var view= claims(id,"P18")[0]||"undefined"
		var flagState=claims(id,"P41")[0]||"undefined"
		var flag= claims(id,"P41")[1]||"undefined"
		var shield= claims(id,"P94")[0]||"undefined"
		
		return({
			location1,
			location2,
			view,
			flagState,
			flag,
			shield
		})
	}catch(error){
		return({
			location1:"",
			location2:"",
			view:"",
			flagState:"",
			flag:"",
			shield:"",
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

const getCitiesByIso= async (iso) => {
	try {
		var cities=[]
		const res=await fetch(`http://api.geonames.org/searchJSON?country=${iso}&username=rdtaipe`)
		const data=await res.json()
		data.geonames.map((e) => {
			var num=e.adminCode1
				if(e.fcode=='ADM1'){
					var fix=Number(num)||undefined
					if(fix!==undefined){
						// console.log(num,name)
						cities.push({
							id:e.geonameId,
							name:e.name,
							lat:e.lat,
							lng:e.lng,
							population:e.population,

						})
					}
				}
		})
		return cities
	  } catch (error) {
		return({id,name,lat,lng,population})

	  }
}

const getPixelsImg = async (contry) => {
	const API_key = "563492ad6f917000010000019e38357ea9604a3d98fb3b29bbef78d3";
const url = "https://api.pexels.com/v1/curated?per_page=20&page=5";
const fetchAPI=async(url)=>{
	const dataFetch = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: API_key,
		},
	});
	const data = await dataFetch.json();
	return data;
}


	try{
		const res =await fetchAPI(`https://api.pexels.com/v1/search?query=${contry}&page=1&per_page=2`)
		const data = await res.photos
		var arr=[]
		data.map((e)=>{
			arr.push(e.src.large)
		})
		return arr
	}catch(error){
		return ([])

	}
}

module.exports = router;

