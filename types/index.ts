export type InputType = {
  type: string;
  text: string;
  action?: any | void;
  value?: string | number;
  error?: boolean;
};

export type LargeHeaderType = {
  title: string;
};

export type LoginDetails = {
  email: string;
  password: string;
};

export type RegisterDetails = {
  name: string;
  email: string;
  password: string;
};

export type ButtonType = {
  onClick: any;
  loading: boolean;
  text: string;
};

export type ProductCardType = {
  image: string;
  name: string;
  price: number | string;
  action?: any;
};

export type ProgressBarType = {
  percentage: number;
  strokeWidth: number;
};

export type ReviewCardType = {
  userId?: string | number;
  rating: number;
  comment: string;
};
