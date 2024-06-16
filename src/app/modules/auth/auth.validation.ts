import z from "zod";
const AuthValidation = z.object({
  body: z.object({
    id: z.string(),
    password: z.string(),
  }),
});


const changePasswordValidation = z.object({
  body: z.object({
    oldPassword: z.string({ message: "Old password is required" }),
    newPassword: z.string({ message: "New password is required" }),
  }),
});

export const AuthValidations = {
  AuthValidation,
  changePasswordValidation
};
