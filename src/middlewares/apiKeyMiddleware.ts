import {Request, Response, NextFunction} from "express";

export const apiKeyMiddleware = (req: Request, res: Response, next:NextFunction) => {
    const apiKey = req.headers["x-api-key"]
    if (apiKey === "password") {
        next()
    } else {
        res.status(403).json({
            message: "Akses ditolak: API key salah"
        })
    }
}