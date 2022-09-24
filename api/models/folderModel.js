const mongoose = require("mongoose");

const folderSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    name: {
      type: String,
      required: [true, "Please add a text value"],
    },
    folderColor: {
      type: String,
    },
    body: {
      type: String,
    },
    // classStyle: {
    //   type: String,
    // },
    isDefault: {
      type: Boolean,
      required: [false, "is default is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Folder", folderSchema);
