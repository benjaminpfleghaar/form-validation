"use server";

type State = {
  email?: string;
  message?: string;
};

export async function action(_: State, formData: FormData): Promise<State> {
  const email = formData.get("email") as string;

  // Add Promise for fake delay of 2s
  await new Promise<void>((resolve) => setTimeout(resolve, 2000));

  return { message: "success", email: email };
}
