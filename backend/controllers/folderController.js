const asyncHandler = require("express-async-handler")
const Folder = require('../models/folderModel')
//desc: get folder
//@route Get /files
//@access

const getFolder = asyncHandler(async(req, res) => {
    const folders = await Folder.find()
    res.status(200).json(folders)
})

//desc: set folder
//@route set /files
//@access

const setFolder = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    const folders = await Folder.create({
        text: req.body.text,
        user: req.user.id,
      })
    
      res.status(200).json(folders)
})

//desc: update goals
//@route Get /files
//@access

const updateFolder = asyncHandler(async(req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
})

//desc: delete folder
//@route Get /files
//@access

const deleteFolder = asyncHandler(async(req,res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
})





module.exports = {
    getFolder,
    setFolder,
    updateFolder,
    deleteFolder
}