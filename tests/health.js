'use strict'

const axios = require('axios')

const chai = require('chai')
const { expect } = chai

axios.defaults.baseURL = 'http://localhost:3000'

// start up the app
require('../src/index')

describe('GET /health-check', function () {
  it('should be healthy', async function () {
    const { data, status } = await axios.get('/health-check').catch(err => { throw new Error(err.message) })

    expect(data.status).to.equal('ok')
    expect(status).to.equal(200)
  })
})
