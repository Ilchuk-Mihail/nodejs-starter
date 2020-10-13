'use strict'

const express = require('express')
const health = require('./controllers/health')

const router = express.Router()

router.get('/health-check', health.check)

module.exports = router
