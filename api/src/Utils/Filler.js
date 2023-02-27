
const { Country }= require ('../db.js')
var {DB_API}= process.env

async function Filler() {

    try {
        fetch(DB_API)
        .then((res) => res.json())
        .then((data) => {
            data.map(async (e) => {
                var capital=e.capital|| ['undefined']
                var latlng=e.latlng|| [0,0]
                await Country.findOrCreate({
                    where: {
                      id: e.cca3,
                      iso: e.cca2,
                      name: e.name.common,
                      flag: e.flags[0],
                      region: e.region,
                      capital: capital[0],
                      subregion: e.subregion || 'undefined',
                      area:e.area,
                      population: e.population,
                      lng: latlng[1],
                      lat: latlng[0],
                    },
                  });
               
              });
                
        })
        console.log('Countries loaded to database')
      } catch (error) {
        res.json({menssage: 'Error loading countries to database'})
      }

  
}


module.exports = Filler