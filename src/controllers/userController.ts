import {Request, Response} from "express";
import prisma from "../lib/prisma";

export const getUsers = async (req:Request, res:Response) => {
    try {
        const users = await prisma.user.findMany()
        return res.status(200).json({
            message: "Users fetched successfully",
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed fetch users",
            error: error
        })
    }
}

export const createUser = async (req:Request, res:Response) => {
    try {
        const {name, email, password} = req.body
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })

        return res.status(201).json({
            message: "User created",
            data: newUser
        })
    } catch (error) {
        return res.status(500).json({
            message: "Fail to create user",
            error: error
        })
    }
}