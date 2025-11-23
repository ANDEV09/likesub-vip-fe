import * as z from "zod";
const loginSchema = z.object({
    username: z
        .string()
        .min(5, "Username must be at least 5 characters.")
        .max(32, "Username must be at most 32 characters."),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters.")
        .max(10, "Password must be at most 10 characters."),
});

export { loginSchema };
