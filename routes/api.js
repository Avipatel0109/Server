const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const plan = require('../controllers/planController');
const activity = require('../controllers/activityController');

// Auth Routes
router.post('/register', auth.register);
router.post('/login', auth.login);

// Plan Routes
router.get('/plans', plan.getPlans);

// Activity Routes
router.post('/track', activity.trackActivity);
router.get('/progress/:userId', activity.getProgress);

module.exports = router;
