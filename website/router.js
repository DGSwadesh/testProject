var express = require("express")
var router = express.Router()

router.get("/", function(req,res){
    console.log('this is home page')
    res.render('home/')

})

router.get("/home", function(req,res){
    console.log('this is home page')
    res.render('home/home')

})

router.get("/login", function(req,res){
    console.log('this is home page')
    res.render('home/login')

})

router.get("/signup", function(req,res){
    console.log('this is home page')
    res.render('home/signup')

})

module.exports = router


