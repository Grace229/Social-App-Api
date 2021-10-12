const homeRouter = require('./home.routes')
const authRouter = require('../auth/auth.routes')

const routers = (app) => {
app.use('/', homeRouter)
app.use('/auth', authRouter)
}
module.exports = routers