import { z } from "zod";

export const FormValidator = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters!",
    })
    .max(50, {
      message: "Name must not be more than 50 characters!",
    }),
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters!",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters!",
  }),
});

export type FormValidatorType = z.infer<typeof FormValidator>;
