
module.exports = {
  /**
   * Application health check
   * @param {object}   req  Express request object
   * @param {object}   res  Express response object
   * @param {Function} next Express next handler
   */
  check (req, res, next) {
    try {
      res.send({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: Date.now()
      })
    } catch (err) {
      next(err)
    }
  }

}
