import express from 'express'
import globalErrorHandler from './ErrorHandler/glbalErrorHandler'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './module/users/user.router'
import verificationRouter from './module/verificationEmail/verificationEmail.router'
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin: "https://full-secure-login-and-registration-1.onrender.com", credentials: true}))
app.use(cookieParser())

// routes
const url = '/api/v1'
app.use(`${url}/user`,userRouter)
app.use(`${url}/verification`,verificationRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)
export default app
