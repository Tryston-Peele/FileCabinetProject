const express = require("express");
//const { update } = require("tar")
const router = express.Router();
const {
  getFolder,
  setFolder,
  updateFolder,
  deleteFolder,
} = require("../controllers/folderController");

router.get("/files", getFolder);

router.post("/files", setFolder);

router.put("/files/:id", updateFolder);

router.delete("/files/:id", deleteFolder);

module.exports = router;
