import z from "zod";

export const AuthValidation = z.object({
  body: z.object({
    id: z.string(),
    password: z.string(),
  }),
});
