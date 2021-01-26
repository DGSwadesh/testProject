var express = require("express")
var router = express.Router()

router.get("/", function(req,res){
    console.log('the is home page')
    res.render('index')

})

module.exports = router


