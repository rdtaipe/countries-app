async function getCities(country) {
	// console.log(process.env.GEONAMES_USERNAME)
	//ejemplo: q=Peru&country=PE
	console.log(country)
	var value=country
	var key=(country)=>{
		var a="country"

		if(country.length>2){
			a="q"
		}else{
			a="country"
		}
		return a
	}
	try {
		var cities=[]
		await fetch(`http://api.geonames.org/searchJSON?${key(country)}=${(key(country)==='country'?country.toUpperCase():country.toLowerCase())}&username=rdtaipe`)
		.then((res) => res.json())
		.then((data) => {

				data.geonames.map(async (e) => {
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


		})
        console.log(cities)
		return cities
	  } catch (error) {

		throw new Error(`error: input invalid value ${value} and key ${key(country)}`)

	  }
  }
//   



  module.exports = getCities;