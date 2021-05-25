const router = require('express').Router();
const { Rsvp } = require('../../models');

// controllers/rsvps.js

    // NEW
    router.get('/events/:id/rsvps', async (req, res) => {
      models.Event.findByPk(req.params.event.id).then(event => {
        res.render('rsvps', { event: event });
      });
    });
  
    // CREATE
    router.post('/events/:id/rsvps', async (req, res) => {
        models.Rsvp.create(req.body).then(rsvp => {
            res.redirect(`/events/${req.params.event.id}`);
        }).catch((err) => {
            console.log(err)
        });
    });
  
    // DESTROY  
    router.delete('/events/:id/rsvps', async (req, res) => {
      try {
        const rsvpData = await Rsvp.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
    
        if (!rsvpData) {
          res.status(404).json({ message: 'No project found with this id!' });
          return;
        }
    
        res.status(200).json(rsvpData);
      } catch (err) {
        res.status(500).json(err);
      }
    });
  
module.exports = router;