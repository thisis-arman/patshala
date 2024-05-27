import { z } from "zod";

// Define the Zod schema for the user model
const userSchema = z
  .object({
    id: z.string().nonempty("Id is required"),
    password: z.string().nonempty("Password is required"),
    needsPasswordChange: z.boolean().default(true),
    role: z.enum(["admin", "student", "faculty"], {
      required_error: "Role is required",
    }),
    status: z.enum(["in-progress", "blocked"], {
      required_error: "Status is required",
    }),
    isDeleted: z.boolean().default(false),
  })
  .strict();

// Export the validation schema
export default userSchema;
