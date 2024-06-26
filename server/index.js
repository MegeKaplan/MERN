import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import database from "./config/database.js"
import authRouter from "./routes/auth.js"

const config = dotenv.config()

const app = express()

const PORT = 3000 || process.env.PORT

database()

app.use(cors())
app.use(bodyParser.json({extended:true, limit:"30mb"}))
app.use(bodyParser.urlencoded({extended:true, limit:"30mb"}))
app.use('/', authRouter)





app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})