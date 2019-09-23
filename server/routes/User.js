const express = require('express')
const Router = express.Router()
const User = require('../model/user')

Router.get('/' , async(req,res) =>{
     await User.find()
         .then(users => res.json(users))
         .catch(err => res.status(400).json('Error : ' + err))
})

Router.post('/add', async(req,res)=>{
    console.log(req.body)
    const username = req.body.username
    const newUser = new User({username})

    newUser.save()
        .then(() => res.json('Sucess!!!'))
        .catch(err => res.status(400).json('Error:' + err))
})

module.exports = Router