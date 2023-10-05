import express, { Request, Response } from 'express'; 

const app = express(); 

const PORT = Number(process.env.PORT) || 3000

 app.get("/", (_: Request, res: Response) => {
   return res.send("App Running ...")
 })

 app.listen(PORT, () => {
    console.log("App Running ...")
 })