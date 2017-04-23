var express = require('express');
var router = express.Router();

router.get('/home', function(req,res){
    res.render('movies/home')
})

router.get('/search', function(req,res){
    // res.render('movies/search');
    // http://api-public.guidebox.com/v2/{endpoint}
    // var GUIDE_BOX_BASE_URL = 'https://api-public.guidebox.com/v2/search?api_key=' + GUIDE_BOX_API_KEY + '&type=movie&limit=10&field=title&precision=fuzzy&query=';
})

module.exports = router;