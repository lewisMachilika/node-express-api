const express = require('express');
const pool = require('./db');
const router = express.Router();

// Define your routes here
// Example:
router.get('/users', async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM public.auth_user  ORDER BY id ASC ");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
