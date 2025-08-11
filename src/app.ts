import express, { Application, NextFunction, Request, Response } from "express";
import routes from "./modules/routes";
import { sendResponse } from "./utils/sendResponse";

const app: Application = express()

app.use(express.json())
app.use('/api', routes)

app.get('/', (req: Request, res: Response) => {
    res.send('Mango Server is running')
})

app.use((err: any, req: Request, res: Response,  next: NextFunction) => {

    sendResponse(res, {
        statusCode: 500,
        success: false,
        message: err.message || "something went wrong",
        data: err
    })

})
export default app