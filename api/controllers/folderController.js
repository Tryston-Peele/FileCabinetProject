const asyncHandler = require("express-async-handler")
const Folder = require('../models/folderModel')
//desc: get folder
//@route Get /files
//@access

const getFolder = asyncHandler(async(req, res) => {

  try {
    const folders = await Folder.find();

    res.status(200).json(folders)
  } catch (error) {
    res.status(500).json('whoops');
  }

})

//desc: set folder
//@route set /files
//@access

const setFolder = asyncHandler(async(req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error("Please add a name")
    }
    const folders = await Folder.create({
        name: req.body.name,
        body: req.body.body,
        classStyle: req.body.classStyle,
        folderColor: req.body.folderColor,
        isActive: req.body.isActive
      })
    
      res.status(200).json(folders)
})

//desc: update goals
//@route Get /files
//@access

const updateFolder = asyncHandler(async (req, res) => {
    const folders = await Folder.findById(req.params.id)
  
    if (!folders) {
      res.status(400)
      throw new Error('Folder not found')
    }
  
    // Check for user
 /*   if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    } */
  
    // Make sure the logged in user matches the goal user
/*    if (goal.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    } */
  
    const updatedFolder = await Folder.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedFolder)
  })

//desc: delete folder
//@route Get /files
//@access

const deleteFolder = asyncHandler(async(req,res) => {
    const folders = await Folder.findById(req.params.id)

    if (!folders) {
      res.status(400)
      throw new Error('Goal not found')
    }

  
    // Check for user
 /*   if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    } */
  
    await folders.remove()
  
    res.status(200).json({ id: req.params.id })
  })





module.exports = {
    getFolder,
    setFolder,
    updateFolder,
    deleteFolder
}