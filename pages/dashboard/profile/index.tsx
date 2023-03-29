import DashboardLayout from "@/components/DashboardLayout";
import Input from "@/components/Input";
import { getLoggedUser } from "@/functions/api";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setuser] = useState<any>({
    name: "Ngene Samuel Obasi",
    email: "samuels@gmail.com",
  });
  const [newUser, setnewUser] = useState<any>({
    name: `${user.name}`,
    email: `${user.email}`,
  });
  useEffect(() => {
    getLoggedUser(setuser);
    console.log(user);
  }, []);

  return (
    <DashboardLayout>
      <div className="flex justify-center">
        <div className="mt-10 flex flex-col items-center w-full px-6 sm:w-96">
          <img
            className="rounded-full h-28 w-28"
            src={"https://img.icons8.com/bubbles/2x/guest-male.png"}
            alt="User"
          />
          <Input
            type="text"
            text="Full Name"
            value={newUser.name}
            action={(e: any) =>
              setnewUser({ ...newUser, name: e.target.value })
            }
          />{" "}
          <Input
            type="email"
            text="Email Address"
            value={newUser.email}
            action={(e: any) =>
              setnewUser({ ...newUser, email: e.target.value })
            }
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
