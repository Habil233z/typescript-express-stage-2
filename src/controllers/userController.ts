import {Request, Response} from "express";

export const getProfile = (req: Request, res:Response) => {
    return res.json({
        id: 1,
        username: "Habil",
        email: "dummy@gmail.com"
    })
}

export const getProfilebyId = (req: Request, res:Response) => {
    const {id} = req.params
    return res.json({
        message: `Found user with id:${id}`
    })
}

export const createProfile = (req: Request, res:Response) => {
    const {id, name, email} = req.body
    return res.status(201).json({
        message: "User has been created",
        data: {id, name, email}
    })
}