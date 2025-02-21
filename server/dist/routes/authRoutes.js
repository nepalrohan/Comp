import { Router } from "express";
import { registerSchema } from "../validations/authValidation.js";
import { ZodError } from "zod";
import { formatError } from "../helper.js";
import prisma from "../config/database.js";
import bcrypt from "bcrypt";
const router = Router();
router.post("/register", async (req, res) => {
    try {
        const body = req.body;
        const payload = await registerSchema.parse(body);
        let user = await prisma.user.findUnique({
            where: {
                email: payload.email,
            },
        });
        if (user) {
            return res.status(402).json({
                errors: {
                    email: "Email is already taken, try another email to register",
                },
            });
        }
        const salt = bcrypt.genSalt(10);
        payload.password = await bcrypt.hash(payload.password, salt);
        await prisma.user.create({
            data: {
                name: payload.name,
                email: payload.email,
                password: payload.password
            }
        });
        return res.json({ message: "Account created sucessfully" });
    }
    catch (error) {
        if (error instanceof ZodError) {
            const errors = formatError(error);
            return res.status(422).json({
                message: "Invalid data",
                errors,
            });
        }
        return res.status(500).json({ message: "Something went wrong" });
    }
});
export default router;
