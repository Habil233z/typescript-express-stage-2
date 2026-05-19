import {Request, Response, NextFunction} from "express";
import prisma from "../lib/prisma";

export const getUsers = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const users = await prisma.user.findMany()
        return res.status(200).json({
            message: "Users fetched successfully",
            data: users
        })
    } catch (error: any) {
        error.message= "Fail to get user"
        next(error)
    }
}

export const transferPoint = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const {senderId, receiverId, amount} = req.body
        await prisma.$transaction([
            prisma.user.update({
                where: {id: Number(senderId)},
                data: {point: {decrement: Number(amount)}}
            }),
            prisma.user.update({
                where: {id: Number(receiverId)},
                data: {point: {increment: Number(amount)}}
            })
        ])

        return res.status(200).json({
            message: "Transfer berhasil"
        })
    } catch (error: any) {
        error.message= "Internal Error"
        next(error)
    }
}