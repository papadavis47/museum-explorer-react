const express = require('express');
const router = express.Router()
const db = require('../models/index')

// index page to deliver a list of museums

router.get('/', (req, res) => {
    db.Museum.find()
    .then(museums=>{
        console.log(museums)
        res.send(museums);
    }).catch(err=>res.send({ message: 'Error in getting all museums', err}));
})


router.get('/:id', (req, res)=>{
    console.log(req.params.id)
    db.Museum.findById(req.params.id)
    .then(museum=>res.send(museum)).catch(err=>res.send({ message: 'Error in getting this museum', err}))
 })

 router.post('/', (req, res) => {
    // Remove any keys that have no value
    Object.keys(req.body).forEach((key) => (req.body[key] == '') && delete req.body[key]);
    db.Museum.create(req.body)
    .then(museum => res.send(museum))
    .catch(err=>res.send({ message: 'Error in creating one museum', err}));
  })
  


module.exports = router;