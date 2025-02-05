"use server";

import { z } from "zod";

type FormState = {
  email?: string;
  error?: string[];
  success?: boolean;
};

const FormSchema = z.object({
  email: z
    .string()
    .nonempty("E-Mail address is required.")
    .email("Invalid E-Mail address.")
    .trim(),
});

export async function action(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email") as string;
  const validatedFormField = FormSchema.safeParse({
    email: email,
  });

  if (!validatedFormField.success) {
    return {
      email: email,
      error: validatedFormField.error.flatten().fieldErrors.email,
      success: false,
    };
  }

  // Add a fake delay to make waiting noticeable
  await new Promise<void>((resolve) => setTimeout(resolve, 2000));

  return { success: true };
}
