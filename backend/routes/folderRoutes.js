const express = require("express")
const router = express.Router()

router.get('/files', (req,res) => {
    res.status(200).json({})
})

router.post('/files', (req, res) => {
    res.status(200).json({})
})

router.put('/files:id', (req,res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
})

router.delete('/files:id', (req,res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
})

module.exports = router