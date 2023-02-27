const { Request, Response } = require('express');
const {Op} = require('sequelize')
const { Country } = require('../db.js');

const getAllCountries = async (req = Request, res = Response) => {
    try {
        const countries = await Country.findAll();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({message: 'Get all countries error'});
    }
}

const getCountryById = async (req = Request, res = Response) => {
    const {idPais}= req.params

    try {
        const country = await Country.findByPk(idPais);
  
        if(country){
            res.status(200).json(country);
        }else{
            return res.status(404).json({message: `Country id ${idPais} not exist or not loaded`});
        }
      
    }
    catch (error) {
        res.status(500).json({message: 'error to get country by id'});
    }
}

const getCountryByKey = async (req = Request, res = Response) => {

    const {key}= req.params

    const value = ()=>{
        var toLowerCase=req._parsedUrl.query.slice(1).split('=')[0].toLowerCase()
        var fix=toLowerCase.charAt(0).toUpperCase()+toLowerCase.slice(1)
        if(key==='id'){
            var newfix=fix.toUpperCase()
            
            return newfix
        }else{
            return fix
        }

      
    }
  
    try {
        const country = await Country.findAll({
            where: {
                [key]: {
                    //MUESTRA SOLO CUANDO CONTIENE EL VALOR
                    [Op.like]: `%${value()}%`,

                    //MUESTRA SOLO CUANDO INCIA CON EL PRIMER VALOR
                    [Op.startsWith]: `${value()}`
                }
            }
        });
        if(country){
            res.status(200).json(country)
            // getCities(country.name).then((data)=>{
            //     var arr=[country,{states:data}]
            //    res.status(200).json(arr);
            // })
        }else{
            return res.status(404).json({message: `Country ${key} ${value} not exist`});
        }
       
    }
    catch (error) {
        res.status(500).json({message: `Error to filter country by {${key}:${value}}`});
    }
}

module.exports = {
    getAllCountries,
    getCountryById,
    getCountryByKey,
}