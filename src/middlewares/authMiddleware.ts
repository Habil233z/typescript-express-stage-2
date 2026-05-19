import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

export const authentication = (req: Request, res: Response, next:NextFunction) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
        return res.status(401).json({
            message: "Access denied, no Token detected"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        (req as any).user = decoded
        next()

    } catch (error: any) {
        error.message = "Token invalid or expire"
        next(error)
    }
}