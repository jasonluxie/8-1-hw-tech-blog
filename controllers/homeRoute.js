const router = require('express').Router();
const Blog = require('../model/Blog')

router.get('/', async (req, res) => { //This route is probably wrong too
    try{
        const blogData = await Blog.findAll()
        const blogPosts = blogData.map((data) => data.get({plain : true}))
        res.render('all', {}) //Need to figure this out 
    } catch(err) {
        res.status(500).json(`There seems to be some sort of database error`)
    }
  });
  
  module.exports = router;