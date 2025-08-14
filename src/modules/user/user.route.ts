import { Router } from "express";
import { getUsers, registerUser } from "./user.controller";
import { userZodSchema } from "./user.validate";
import { validateRequest } from "../../middleware/validateRequest";

const userRoute = Router();

userRoute.post("/", validateRequest(userZodSchema.userCreatezodSchema), registerUser);
userRoute.get("/", getUsers);

export default userRoute;
