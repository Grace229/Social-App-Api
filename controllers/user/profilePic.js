const {User} = require('../../models/User')
const cloudinary = require('cloudinary').v2;
const cloudinarySetup = require('../../config/cloudinary')

const dpUpload = async (req, res) => {
    // check if an image is uploaded
    if(!req.file) return res.status(400).json({msg: 'Please upload an image'})

    // // look for the user
    let  user = await User.findById(req.user._id)

    // // setup cloudinary
    await cloudinarySetup();

    // // upload to cloudinary
    let data = req.file.path;

    console.log(data)

    const uploadedImage = await cloudinary.uploader.upload(data)
    console.log(uploadedImage)
}
module.exports = dpUpload