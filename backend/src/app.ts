import express from 'express'
import globalErrorHandler from './ErrorHandler/glbalErrorHandler'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './module/users/user.router'
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin: "http://localhost:5173", credentials: true}))
app.use(cookieParser())

// routes
const url = '/api/v1'
app.use(`${url}/user`,userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)
export default app