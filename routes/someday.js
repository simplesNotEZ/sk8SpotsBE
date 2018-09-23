const express = require("express")
const router = express.Router()

const queries = require("../skatespotsDB/queries")

router.get('/', (req,res,next) => {
    console.log("Someday GET request using queries.list");
    queries.list('someday')
    .then(somedaySpots => {
        res.json({somedaySpots})
    })
})

router.get('/:id', function(request,response){
    queries.read('someday', request.params.id).then(table_object => {
        table_object
            ? response.json({table_object})
            : response.status(404).json({message: 'Not found'})
    })
})

router.post('/', function(request,response){
    console.log("Someday route");
    queries.post('someday', request.body)
    .then(new_table_object => {
        response.status(201).json({new_table_object})
    })
})

router.put('/:id', function(request,response,next){
    console.log("router.put accessed.  request.params: ", request.params);
    queries.update('someday', request.params.id, request.body)
    .then(updatedSpot => response.status(201).json({updatedSpot}))
})

router.delete('/:id', function(request,response,next){
    console.log("the router.delete shyte");
    console.log("request.params are: ", request.params);
    queries.delete('someday', request.params.id)
    .then(() => {
        response.status(204).json()
    });
})

router.use(function(error,request,response,next){
    console.error(error.stack)
    response.status(400).send('Error Biotch: Something Went Wrong')
})

module.exports = router