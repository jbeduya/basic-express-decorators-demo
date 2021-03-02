import express from 'express';
import { Router } from '@webgeek/basic-express-decorators'
import { json, urlencoded } from 'body-parser'
import './controllers'

const app = express()
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(Router.getInstance())

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))