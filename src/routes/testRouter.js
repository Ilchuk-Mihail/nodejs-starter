const router = require('express-promise-router')();
const controller = require('../controllers/testController');

/**
 * Test route
 */
router.route('/').get(controller.get);

module.exports = router;
