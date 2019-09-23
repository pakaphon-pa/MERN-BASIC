const express = require('express')
const Router = express.Router()

const excercises = require('../model/exercise')

Router.get('/' , async(req,res) =>{
    excercises.find()
                .then(excercises => res.json(excercises))
                .catch(err => res.status(400).json('Error' + err))
})

Router.get('/:id', async(req,res) =>{
    const { id } = req.params
    excercises.findById(id).then(excercises => res.json(excercises))
                           .catch(err => res.status(400).json('Error: ' + err))
})

Router.post('/add', async(req , res) =>{
        const { username , description , duration , date } = req.body
        console.log(username)
        const newExcercise = new excercises({
            username,
            description,
            duration,
            date
        })

        newExcercise.save().then(() => res.json('Success !!!'))
                           .catch(err => res.status(400).json('Error: ' + err))

})

Router.delete('/:id' , async(req,res) =>{
    const { id } = req.params
    excercises.findByIdAndDelete(id)
            .then(() => res.json('Deleted Success!!'))
            .catch((err => res.status(400).json('Error :' + err)))
})

Router.post('/update/:id', async(req,res)=>{
    const { id } =req.params
    const { username , description , duration , date } = req.body
    excercises.findById(id)
                .then(exercise =>{
                    exercise.username = username,
                    exercise.description = description,
                    exercise.duration = duration,
                    exercise.date = date

                    exercise.save()
                            .then(() => res.json('Update Successs!!'))
                            .catch(err => res.status(400).json('Error:' + err))
                }).catch(err => res.json('Error : ' + err) )
})

module.exports = Router