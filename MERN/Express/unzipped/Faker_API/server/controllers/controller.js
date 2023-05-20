const { newUser, newCompany} = require('../models/model')

module.exports.userCreation = (req, res) => {
        res.json(newUser)
    }
module.exports.companyCreation = (req, res) => {
        res.json(newCompany)
    },
module.exports.userCompanyCreation = (req, res) => {
        res.json({ user: newUser, company: newCompany })
    }