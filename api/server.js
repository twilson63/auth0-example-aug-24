const express = require('express')
var jwt = require('express-jwt')
var jwks = require('jwks-rsa')
var cors = require('cors')

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://jrs-demo.auth0.com/.well-known/jwks.json"
    }),
    audience: 'https://api.super-awesome.com',
    issuer: "https://jrs-demo.auth0.com/",
    algorithms: ['RS256']
});


const app = express()
app.use(cors({credentials: true}))
app.use(jwtCheck)

app.get('/', (req, res) => res.send([1,2,3,4,5]))
app.listen(3333)

