const router = require('express').Router();
const {Post} = require('../model/Post');

router.get('/', (req, res, next) => {
    Post.findAll({raw: true})
        .then((result) => res.json(result))
        .catch(next);
});

module.exports = router;