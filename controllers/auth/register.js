const createNewUser = (req, res, next) =>{
    try {
     let { email, username, password}   = req.body;
     console.log(req.body) 
    } catch (err) {
       res.status(500).json({message: err.message})
    }
}
module.exports = createNewUser