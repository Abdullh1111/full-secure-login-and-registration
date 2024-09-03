import dotenv from 'dotenv'

dotenv.config()

export default {
    port: process.env.PORT,
    dbUrl: process.env.DB_URL,
    salt: process.env.SALT,
    jwt_secret: process.env.JWT_SECRET,
    email: process.env.EMAIL,
    password: process.env.PASSWORD
}