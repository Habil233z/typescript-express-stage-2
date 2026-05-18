import {Request, Response} from "express";

export const errorHandler = (err: any, req:Request, res:Response) => {
    console.error(err.stack)

    const statusCode = err.statusCode || 500
    const message = err.message || "Internal server error"

    res.status(statusCode).json({
        status: "error",
        message: message
    })
}