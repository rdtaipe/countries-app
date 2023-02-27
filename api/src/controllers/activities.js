const { Request, Response } = require('express');
const {Op} = require('sequelize')
const {Activity} = require('../db.js')


const CreateActivities=async(req = Request, res = Response) =>{
    var array=req.body.countries
    array.forEach(country => {
        let id=country.id
        let name=country.name

        Activity.findOne({ where: { id: id } }).then(activity => {
            if (activity) {
              //La actividad ya existe, no hacer nada
              console.log(`El usuario con id ${activity.id} ya existe`);
            } else {
              // La actividad no existe, insertarlo
              Activity.create({
                id: id,
                name: req.body.name,
                difficulty: req.body.difficulty,
                duration: req.body.duration.toString(),
                season: req.body.season,
                country: name
            })
            }
          });

        
    });

res.json({message: 'Activity created successfully'})


}

const GetAllActivities= async (req = Request, res = Response) =>{

   Activity.findAll()
        .then(activities => {
            res.send(activities)
        })
        .catch(err => {
            res.send(err)
    })
    
}


module.exports={
    GetAllActivities,
    CreateActivities
}