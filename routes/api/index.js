// const router = require('express').Router();
// const thoughtsRoutes = require('./thoughtsRoutes');
// const usersRoutes = require('./usersRoutes'); 

// router.use('/thoughts', thoughtsRoutes);
// router.use('/users', usersRoutes);

// module.exports = router;

const router = require('express').Router();
const usersRoutes = require('./usersRoutes');

router.use('/users', usersRoutes);

module.exports = router;