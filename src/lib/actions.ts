"use server";
import { signIn } from "@/app/auth/auth";

export const authenticate = async (prevState: any, formData: FormData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (err: any) {
    //console.log(typeof err)
    if (err) {
      // console.log(err)
      // return "Wrong Credentials";
      // if (err.message.includes("CredentialsSignin")) {

      //   return "Wrong Credentials";
      // }
      if (err?.type?.includes("CredentialsSignin")) {
        return "Wrong Credentials";
      }
    }

    throw err;
  }
};
