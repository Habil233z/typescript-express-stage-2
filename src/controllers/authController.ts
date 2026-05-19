import {Request, Response, NextFunction} from "express";
import prisma from "../lib/prisma";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const {name, email, password} = req.body
         const image = req.file ? req.file.filename : null

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        const existingEmail = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (email === existingEmail?.email) {
            return res.status(400).json({
                message: "User with this email has already been registered, please use another email"
            })
        }

        const newUser = await prisma.user.create({
            data: {
                profilePicture: image,
                name,
                email,
                password: hashedPassword
            }
        })

        return res.status(201).json({
            message: "Register successfull",
            data: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        })
    } catch (error) {
        next(error)
    }
}

export const login = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const {email, password} = req.body
        const user = await prisma.user.findUnique({where: {email}})
        const isMatch = user ? await bcrypt.compare(password, user.password) : false

        if (!user || !isMatch) {
            return res.status(401).json({
                message: "Email atau password salah"
            })
        }

        const token = jwt.sign(
            {id: user.id, email: user.email, role: user.role},
            process.env.JWT_SECRET as string,
            {expiresIn: "1d"}
        )

        return res.status(200).json({
            message: "Login successfull",
            token,
        })
    } catch (error) {
        next(error)
    }
}