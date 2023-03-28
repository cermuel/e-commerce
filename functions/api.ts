import { toast } from "react-hot-toast";
import axios from "axios";
import { LoginDetails, RegisterDetails } from "@/types";

//LOGIN USER
export const handleLogin = ({
  loginDetails,
  setloading,
}: LoginDetails | any) => {
  let api = process?.env.NEXT_PUBLIC_API_URL + "auth/login";
  setloading(true);

  if (loginDetails.email && loginDetails.password) {
    axios
      .post(api, loginDetails)
      .then((response) => {
        setloading(false);
        console.log(response);
        if (response.status == 401) {
          toast.error("Invalid login details");
        }
        if (response.status == 200) {
          toast.success("Login successful");
        }
      })
      .catch((error) => {
        setloading(false);
        console.log(error);
        if (error.response.status == 401) {
          toast.error("Invalid login details");
        } else {
          toast.error("An error occurred");
        }
      });
  } else {
    toast.error("Fill all the fields");
    setloading(false);
  }
};

//REGISTER USER
export const handleRegister = ({
  registerDetails,
  setloading,
}: RegisterDetails | any) => {
  let api = process?.env.NEXT_PUBLIC_API_URL + "auth/register";
  setloading(true);

  if (
    registerDetails.email &&
    registerDetails.password &&
    registerDetails.name
  ) {
    axios
      .post(api, registerDetails)
      .then((response) => {
        setloading(false);
        if (response.status == 400) {
          toast.error("Email ALready Exists");
        }
        if (response.status == 200) {
          toast.success("Account successfully created");
        } else {
          toast.error("An error occurred");
        }
      })
      .catch((error) => {
        setloading(false);
        if (error.response.status == 400) {
          toast.error("Email Already Exists");
        } else {
          toast.error("An error occurred");
        }
      });
  } else {
    toast.error("Fill all the fields");
    setloading(false);
  }
};

export const getAllProducts = ({ setdata, setloading, seterror }: any) => {
  let api = process?.env.NEXT_PUBLIC_API_URL + "products";
  setloading(true);
  axios
    .get(api)
    .then((response) => {
      setloading(false);
      setdata(response.data);
    })
    .catch((error) => {
      setloading(false);
      seterror(error);
    });
};
export const getSingleProduct = ({
  setdata,
  setloading,
  seterror,
  id,
}: any) => {
  let api = process?.env.NEXT_PUBLIC_API_URL + "products/" + id;
  axios
    .get(api)
    .then((response) => {
      setdata(response.data);
      setloading(false);
    })
    .catch((error) => {
      seterror(error);
      setloading(false);
    });
};
