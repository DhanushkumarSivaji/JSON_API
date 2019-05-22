const express = require("express")
const router = express.Router()
const auth = require('../../middleware/auth')
//Item Modal 
const Json = require('../../modals/Json')


//@route GET api/items
//@desc Get All items
//@access Public
router.get ('/',auth,(req,res) => {
    Json.find()
        .sort({date: -1})
        .then(items => res.json(items))
})

//@route POST api/items
//@desc Create a post
//@access Public

router.post ('/',auth,(req,res) => {
    const newJson = new Json({
        json:req.body.json
    })

    newJson.save().then(json => res.json(json))
 
})



// //@route DELETE api/items
// //@desc Delete an Item
// //@access Public

// router.delete ('/:id',(req,res) => {
//     Item.findById(req.params.id)
//         .then(item => item.remove().then(()=>res.json({sucsess:true})))
//         .catch(err => res.status(404).json({sucsess:false}))
// })


module.exports = router;