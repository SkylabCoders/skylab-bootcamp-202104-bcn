const Pokemon = require()

function pokemonsControlller(){
    async function getAll(req,res){
        const pokemons = await Pokemon.find()
        res.json(pokemons)
    }

    async function createOne(req,res){
        const newPokemon = new Pokemon(req.body)
        try {
            await newPokemon.save()
        } catch (error) {
            res.send(error)
        }
    }

    async function getById(req,res){
        try {
            const pokemonById = await Pokemon.findById(req.params.pokemonById)
        } catch (error) {
            res.status(404)
            res.send(error)
        }
    }

    async function updateById(req,res){
        try {
            const updatePokemon = await Pokemon.findByIdAndUpdate(
                req.params.pokemonId,
                req.body,
                {new:true}
            )
            res.json(updatePokemon)
        } catch (error) {
            
        }
    }

    async function deleteById(req,res){
        try {
            await Pokemon.findByIdAndDelete(req.params.pokemonId)
            res.status(204)
            res.json
        } catch (error) {
            res.send(error)
        }
    }

    return{
        getAll,
        createOne,
        getById,
        updateById,
        deleteById
    }
}