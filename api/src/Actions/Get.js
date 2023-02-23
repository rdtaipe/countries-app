const { Request, Response } = require('express');
const { Country } = require('../db.js');

const getAllCountries = async (req = Request, res = Response) => {
    try {
        const countries = await Country.findAll();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

const getCountryById = async (req = Request, res = Response) => {
    try {
        const { id } = req.params;
        const country = await Country.findByPk(id);
        if (!country) {
            return res.status(404).json({message: 'Country not found'});
        }
        res.status(200).json(country);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}



 

module.exports = {
    getAllCountries
}



