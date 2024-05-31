const express = require('express')
require('./database/MongooseConnection') // mandar llamar al archivo de conexión
const productRoutes = require('./routes/productRoutes')
const userRouter = require('./routes/userRouter')
const authJwt = require('./libs/jwt')
const app = express()
const port = 3000

app.use(express.json());
app.use(authJwt())
app.use('/api/users', userRouter)

app.use('/api', productRoutes)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))