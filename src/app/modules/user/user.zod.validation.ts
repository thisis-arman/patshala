import { z } from "zod";

// Define the Zod schema for the user model
const userSchema = z
  .object({
    password: z.string().nonempty("Password must be string").optional(),
  })
  .strict();

// Export the validation schema
export default userSchema;
