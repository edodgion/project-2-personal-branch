const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const rsvpRoutes = require('./rsvpsRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/rsvps', rsvpRoutes);

module.exports = router;
