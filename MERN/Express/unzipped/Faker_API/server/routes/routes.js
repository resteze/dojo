const Controller = require('../controllers/controller')

    //routing
    module.exports = (app) => {

        app.get('/api/users/new', Controller.userCreation)

        app.get('/api/companies/new', Controller.companyCreation)

        app.get('/api/user/company', Controller.userCompanyCreation)
    }

