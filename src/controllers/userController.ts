import {Request, Response} from "express";

export const getHello = (req: Request, res:Response) => {
    return res.json({
        message: "Hello world"
    })
}

export const getProfilebyName = (req: Request, res:Response) => {
    const {name} = req.params
    return res.json({
        message: `Found user ${name}`
    })
}

export const login = (req: Request, res:Response) => {
    const {name, email, password} = req.body
    return res.status(201).json({
        message: "User has login successfully",
        data: {name, email, password}
    })
}