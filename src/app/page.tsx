import { logoCompleteBlack } from "@/assets/img/logo/imgLogo";
import { loginCover } from "@/assets/img/projects/imgProjects";
import Image from "next/image";
import SignInForm from "./ui/login/signInForm/signInForm";

export default function Home() {
  return (
    <div className="bg-white w-[100vw] h-[100vh] text-black">
      <div className="grid grid-cols-2 h-full">
        <div id="form" className="flex items-center justify-center h-full">
          <div className="w-1/2 mx-auto">
          <div className="mb-10">
          <Image src={logoCompleteBlack} alt="logo" className="w-[50%] mx-auto" />
          </div>
          
            <h2 className="text-center mb-5 text-2xl">Iniciar Sesión</h2>
            <SignInForm />
          </div>
        </div>
        <div
          className="relative w-full overflow-hidden h-[80vh];
lg:h-[100vh];"
        >
          <Image
            src={loginCover}
            alt="login-cover"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
}
