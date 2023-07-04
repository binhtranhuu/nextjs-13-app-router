"use client";

import { Dispatch, SetStateAction } from "react";

import { AUTH_ERRORS } from "./auth.errors";
import { createSafeContext } from "@/utils/context";
import { UserDetail } from "@/types";

interface AuthContext {
  userInfo?: UserDetail;
  setUserInfo: Dispatch<SetStateAction<UserDetail | undefined>>;
}

export const [AuthContextProvider, useAuthContext] =
  createSafeContext<AuthContext>(AUTH_ERRORS.context);
