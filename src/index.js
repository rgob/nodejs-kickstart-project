const server = require('./server')

// Listen to port set in environment or use default port 3000
server.listen(process.env.PORT || 3000)
