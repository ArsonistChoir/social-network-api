const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes')
const usersRoutes = require('./thoughtsRoutes')

router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;