import {Request, Response} from "express";
import prisma from "../lib/prisma";

export const createProduct = async (req:Request, res:Response) => {
    try {
        const {name, price, stock, category} = req.body
        const newProduct = await prisma.product.create({
            data: {
                name: name,
                price: Number(price),
                stock: Number(stock),
                category: category
            }
        })

        return res.status(201).json({
            message: "Product created",
            data: newProduct
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed to create product",
            error: error
        })
    }
}

export const getAllProducts = async (req:Request, res:Response) => {
    try {
        const products = await prisma.product.findMany()

        return res.status(200).json({
            message: "Products fetched successfully",
            data: products
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed fetch products",
            error: error
        })
    }
}

export const getProductById = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
        const product = await prisma.product.findUnique({
            where: {
                id: Number(id)
            }
        })

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        } 

        return res.status(200).json({
            message: "Product fetched",
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed fetch products",
            error: error
        })
    }
}

export const updateProduct = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
        const {name, price, description} = req.body

        const updatedProduct = await prisma.product.update({
            where: {
                id: Number(id)
            },
            data: {
                name,
                price: Number(price),
                description
            }
        })

        return res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed fetch products",
            error: error
        })
    }
}

export const deleteProduct = async (req:Request, res:Response) => {
    try {
        const {id} =  req.params
        await prisma.product.delete({
            where: {
                id: Number(id)
            }
        })

        return res.status(200).json({
            message: "Product deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed to delete product",
            error: error
        })
    }
}