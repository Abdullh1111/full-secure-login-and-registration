import { Model, Types } from "mongoose";

export type TUser = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TUserMethod = {
  token: () => string;
};

export type TUserModel = Model<TUser, {}, TUserMethod>;
