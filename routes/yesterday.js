const express = require("express")
const router = express.Router()

const queries = require("../skatespotsDB/queries")

router.get('/', (req,res,next) => {
    console.log("Yesterday GET request using queries.list");
    queries.list('yesterday')
    .then(yesterdaySpots => {
        res.json({yesterdaySpots})
    })
})

router.get('/:id', function(request,response){
    queries.read('yesterday', request.params.id).then(table_object => {
        table_object
            ? response.json({table_object})
            : response.status(404).json({message: 'Not found'})
    })
})

router.post('/', function(request,response,next){
    console.log("Yesterday post route");
    queries.post('yesterday', request.body)
    .then(new_table_object => {
        response.status(201).json({new_table_object})
    })
})

router.put('/:id', function(request,response,next){
    console.log("router.put (of yesterday) accessed.  request.params: ", request.params);
    queries.update('yesterday', request.params.id, request.body)
    .then(updatedSpot=> response.status(201).json(updatedSpot))
})

router.delete('/:id', function(request,response,next){
    console.log("the router.delete shyte from Yesterday");
    console.log("request.params are: ", request.params);
    queries.delete('yesterday', request.params.id)
    .then(() => {
        response.status(204).json()
    })
})

router.use(function(error,request,response,next){
    console.error(error.stack)
    response.status(400).send('Error Something Went Wrong')
})

module.exports = router