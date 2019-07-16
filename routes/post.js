const router = require('express').Router();
const {Post} = require('../model/Post');

router.post('/', (req, res, next) => {
    console.log(req.body);
    const {title, description} = req.body;
    Post.create({title, description})
        .then(post => {
            const {title, description} = post;
            res.json({title, description});
        })
        .catch(next);
});

module.exports = router;