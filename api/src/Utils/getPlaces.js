async function getPlaces(city,lng,lat,callback){
	// https://api.opentripmap.com/0.1/en/places/radius?radius=100000&lon=-72.25&lat=-13&name=Cusco&kinds=interesting_places&rate=10&format=json&apikey=5ae2e3f221c38a28845f05b66b2ebd0c0a4a7428f0803525b45f11d8

	try{
	fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=100000&lon=${lng}&lat=${lat}&name=${city}&kinds=interesting_places&format=json&apikey=5ae2e3f221c38a28845f05b66b2ebd0c0a4a7428f0803525b45f11d8`)
	.then((res) => res.json())
	.then((data) => {
var arr=[]
		data.map((item)=>{
			var o={
				xid:item.xid,
				name:item.name,
				wikidata:item.wikidata,
				point:item.point,
	
			}
			arr.push(o)
		
		})
		callback(arr)
		
	})
	}catch(error){
		throw new Error(`error: input invalid value ${city} in function ${getPlaces}`)
	}
}
module.exports = getPlaces;