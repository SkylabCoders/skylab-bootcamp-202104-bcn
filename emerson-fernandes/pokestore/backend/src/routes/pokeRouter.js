const {Router} = require('express')
const pokeController = require()

function pokeRouter(){
    const routes = Router()

    routes
        .route('/')
        .get(pokeController.getAll)
        .post(pokeController.createOne)
    routes
        .route('/:pokeId')
        .get(pokeController.getById)
        .put(pokeController.updateById)
        .delete(pokeController.deleteById)

    return routes
}

module.exports = pokeRouter()