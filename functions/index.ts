import { CartItemType, CartType } from "@/types";

export function ValidateEmail(email: string) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

export const handleShowNav = (navRef: any, sethamColor: any) => {
  if (navRef.current) {
    if (navRef.current?.classList.contains("max-md:hidden")) {
      navRef.current?.classList.remove("max-md:hidden");
      sethamColor("white");
    } else {
      navRef.current?.classList.add("max-md:hidden");
      sethamColor("black");
    }
  }
};

export const formatKoboAmountForDisplay = (amount: number): string => {
  //kobo amount to format
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount / 100);
};
