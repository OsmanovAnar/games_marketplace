"use server"

import { z } from "zod"
import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const registerSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

export async function registerUser(data: z.infer<typeof registerSchema>) {
    try {
        // Validate input
        const validatedData = registerSchema.parse(data)

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: validatedData.email },
        })

        if (existingUser) {
            return { success: false, error: "User with this email already exists" }
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(validatedData.password, 10)

        // Create user
        const user = await prisma.user.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                password: hashedPassword,
            },
        })

        return { success: true, message: "User created successfully" }
    } catch (error) {
        console.error("Registration error:", error)
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message }
        }
        return { success: false, error: "Failed to create user" }
    }
}

export async function loginUser(data: z.infer<typeof loginSchema>) {
    try {
        // Validate input
        const validatedData = loginSchema.parse(data)

        // Find user
        const user = await prisma.user.findUnique({
            where: { email: validatedData.email },
        })

        if (!user) {
            return { success: false, error: "Invalid email or password" }
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(validatedData.password, user.password)

        if (!isValidPassword) {
            return { success: false, error: "Invalid email or password" }
        }

        return {
            success: true,
            message: "Login successful",
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            }
        }
    } catch (error) {
        console.error("Login error:", error)
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message }
        }
        return { success: false, error: "Failed to login" }
    }
}
