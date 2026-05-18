import {NextFunction, Request, Response} from "express";
import prisma from "../lib/prisma";

export const transferHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {senderId, receiverId, amount} = req.body

        if (senderId === receiverId) {
            return res.status(400).json({
                message: "Cannot transfer point to ourself "
            })
        }

        const sender = await prisma.user.findUnique({
            where: {
                id: Number(senderId)
            }
        })
        if (!sender) {
            return res.status(404).json({
                message: "Sender didn't exist"
            })
        }

        const receiver = await prisma.user.findUnique({
            where: {
                id: Number(receiverId)
            }
        })
        if (!receiver) {
            return res.status(404).json({
                message: "Receiver didn't exist"
            })
        }
        
        const avalablePoint = sender?.point
        if (amount > avalablePoint) {
            return res.status(422).json({
                message: "Sender didn't have enoug point to do this point transfer"
            })
        }
        next()
    } catch (error) {
        return res.status(400).json({
            message: "Problem at Transfer Middleware"
        })
    }
}

