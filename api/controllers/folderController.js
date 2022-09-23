const asyncHandler = require("express-async-handler");
const Folder = require("../models/folderModel");
//desc: get folder
//@route Get /files
//@access

const getFolder = asyncHandler(async (req, res) => {
  try {
    const folders = await Folder.find();
    console.log(folders);
    res.status(200).json(folders);
  } catch (error) {
    res.status(500).json("whoops");
  }
});

//desc: set folder
//@route set /files
//@access

const setFolder = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name");
  }

  try {
    const folderCount = await Folder.count();

    if (folderCount === 8) {
      res.status(500).json({
        errorType: "exceededCount",
        message: "cannot exceed eight folders",
      });
    } else {
      const folders = await Folder.create({
        name: req.body.name,
        body: req.body.body,

        folderColor: req.body.folderColor,
        isDefault: req.body.isDefault,
      });

      res.status(200).json(folders);
    }
  } catch (error) {
    res.status(500).json({
      errorType: "system",
      message: "an error occurred while creating folder",
    });
  }
});

//desc: update goals
//@route Get /files
//@access

const updateFolder = asyncHandler(async (req, res) => {
  const folders = await Folder.findById(req.params.id);

  if (!folders) {
    res.status(400);
    throw new Error("Folder not found");
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

  const updatedFolder = await Folder.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedFolder);
});

//desc: delete folder
//@route Get /files
//@access

const deleteFolder = asyncHandler(async (req, res) => {
  try {
    await Folder.findOneAndDelete({ _id: req.params.id });

    const updatedFolders = await Folder.find();

    res.status(200).json(updatedFolders);
  } catch (error) {
    res.status(500).json("an error occurred deleting a folder");
  }
});

module.exports = {
  getFolder,
  setFolder,
  updateFolder,
  deleteFolder,
};
