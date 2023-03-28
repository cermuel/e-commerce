import DashboardLayout from "@/components/DashboardLayout";
import { getLoggedUser } from "@/functions/api";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setuser] = useState<any>();
  useEffect(() => {
    getLoggedUser(setuser);
    console.log(user);
  }, []);

  return (
    <DashboardLayout>
      <div className="flex justify-center">
        <div className="mt-10 flex flex-col items-center w-full sm:w-96">
          <img
            className="rounded-full h-28 w-28"
            src={"https://img.icons8.com/bubbles/2x/guest-male.png"}
            alt="User"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
