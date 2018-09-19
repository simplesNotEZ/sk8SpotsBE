const express = require("express")
const router = express.Router()

const queries = require("../skatespotsDB/queries")

router.get('/', (req,res,next) => {
    queries.list('someday')
    .then(data_from_table => {
        res.json({data})
    })
})

router.get('/:id', function(request,response){
    queries.read('someday', request.params.id).then(table_object => {
        table_object
            ? response.json({table_object})
            : response.status(404).json({message: 'Not found'})
    })
})

router.post('/', function(request,response,next){
    queries.post('someday', request.body)
    .then(new_table_object => {
        response.status(201).json({new_table_object})
    })
})

router.put('/:id', function(request,response,next){
    queries.update('someday', request.params.id, request.body)
    .then(updated_table_object => response.json(updated_table_object))
})

router.delete('/:id', function(request,response,next){
    queries.deleteOne('someday', request.params.id)
    .then(() => {
        response.status(204).json()
    })
})

router.use(function(error,request,response,next){
    console.error(error.stack)
    response.status(400).send('Error Something Went Wrong')
})

module.exports = router