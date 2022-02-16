const express = require('express');
const router = express.Router();
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalControllers')
const { protect } = require('../middleware/authMiddleware')

router.use(protect)
router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals)

module.exports = router;

