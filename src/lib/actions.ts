"use server";
import { signIn, signOut } from "@/app/auth/auth";

/*8
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
};*/
interface FormState {
  email?: string;
  password?: string;
}

interface AuthError {
  type: string;
  kind: string;
  code: string;
}


export const authenticate = async (prevState: FormState, formData: FormData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
    // if (!result?.ok) {
    //   throw new Error("Wrong Credentials");
    // }
   // return true;
  } catch (err: unknown) {
    console.log(err)

    const authError = err as AuthError;
    if (authError?.type?.includes("CredentialsSignin")) {
       return "Wrong Credentials";
      //return false;
    }
    throw err;
  }
};

export const handleSignOut = async () => {
  await signOut();
};
