import express from "express";
import mainRoute from "./routes/index";
import { errorHandler } from "./middlewares/errorHandler";
import { logMiddleware } from "./middlewares/logMiddleware";
import { apiKeyMiddleware } from "./middlewares/apiKeyMiddleware";

const app = express()
const port = 3000

app.use(express.json())
app.use(logMiddleware)
app.use(apiKeyMiddleware)
app.use(mainRoute)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})