import Input from "@/components/Input";
import LargeHeader from "@/components/LargeHeader";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { handleRegister } from "@/functions/api";
import { Toaster } from "react-hot-toast";
import Button from "@/components/Button";
import { RegisterDetails } from "@/types";
import { ValidateEmail } from "@/functions";

const Register = () => {
  const router = useRouter();
  const [loading, setloading] = useState<boolean>(false);
  const [registerDetails, setregisterDetails] = useState<RegisterDetails>({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setconfirmPassword] = useState<string>("");
  const [valid, setvalid] = useState(true);
  return (
    <div className="flex w-screen h-screen">
      <div className="w-[40%] max-md:w-full h-full bg-[white] px-10 max-sm:px-6 space-y-8 flex flex-col justify-center">
        <Toaster />
        <LargeHeader title="Register" />
        <Input
          type="text"
          text="Full Name"
          action={(e: any) => {
            setregisterDetails({ ...registerDetails, name: e.target.value });
          }}
        />
        <Input
          type="email"
          text="Email"
          action={(e: any) => {
            setregisterDetails({ ...registerDetails, email: e.target.value });
            setvalid(ValidateEmail(registerDetails.email));
          }}
          error={!valid}
        />
        <Input
          type="password"
          text="Password"
          action={(e: any) => {
            setregisterDetails({
              ...registerDetails,
              password: e.target.value,
            });
          }}
        />
        <Input
          type="password"
          text="Confirm Password"
          action={(e: any) => setconfirmPassword(e.target.value)}
          error={confirmPassword !== registerDetails.password}
        />
        <div className="w-full px-20 max-md:px-10 max-sm:px-5">
          <Button
            onClick={() => handleRegister({ registerDetails, setloading })}
            text="Create Account"
            loading={loading}
          />
          <div
            className="w-full text-center underline cursor-pointer text-pry-color mt-2"
            onClick={() => router.push("/")}
          >
            Already have an account?
          </div>
        </div>
      </div>
      <div className="w-[60%] max-md:hidden h-full bg-pry-color"></div>
    </div>
  );
};

export default Register;
