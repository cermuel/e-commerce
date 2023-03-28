import Button from "@/components/Button";
import Input from "@/components/Input";
import LargeHeader from "@/components/LargeHeader";
import { handleLogin } from "@/functions/api";
import { LoginDetails } from "@/types";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });
  const [loading, setloading] = useState<boolean>(false);
  const router = useRouter();
  const loginUser = () => router.push("/dashboard/home");
  return (
    <div className="flex w-screen h-screen">
      <div className="w-[40%] max-md:w-full h-full bg-[white] px-10 max-sm:px-6 space-y-8 flex flex-col justify-center">
        <Toaster />
        <LargeHeader title="Welcome Back" />
        <Input
          type="email"
          text="Email"
          value={loginDetails.email}
          action={(e: any) => {
            setLoginDetails({ ...loginDetails, email: e.target.value });
          }}
        />
        <Input
          type="password"
          text="Password"
          value={loginDetails.password}
          action={(e: any) =>
            setLoginDetails({ ...loginDetails, password: e.target.value })
          }
        />
        <div className="w-full px-20 max-md:px-10 max-sm:px-5">
          <Button
            loading={loading}
            text="Login"
            onClick={() => handleLogin(loginDetails, setloading, loginUser)}
          />
          <div
            className="w-full text-center underline cursor-pointer text-pry-color mt-2"
            onClick={() => router.push("/register")}
          >
            Don't have an account?
          </div>
        </div>
      </div>
      <div className="w-[60%] max-md:hidden h-full bg-pry-color"></div>
    </div>
  );
}
