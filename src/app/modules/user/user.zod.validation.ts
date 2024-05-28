import { z } from "zod";

// Define the Zod schema for the user model
const userSchema = z
  .object({
    id: z.string().nonempty("Id is required"),
    password: z.string().nonempty("Password is required"),
  })
  .strict();

// Export the validation schema
export default userSchema;
