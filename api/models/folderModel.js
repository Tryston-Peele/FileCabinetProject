const mongoose = require('mongoose')

const folderSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    name: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    folderColor: {
      type: String,

    },
    body: {
      type: String,
    },
    classStyle: {
      type: String,
    },
    isActive: {
      type: Boolean,
      required: [false, 'is active is required'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Folder', folderSchema)