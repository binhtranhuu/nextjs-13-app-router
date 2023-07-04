"use client";

import { FC, useState } from "react";

import { UserDetail } from "@/types";

import { AuthContextProvider, useAuthContext } from "./auth.context";
import Link from "next/link";

interface AuthProviderProps {
  user?: UserDetail;
  children: React.ReactNode;
}

export const useAuth = () => useAuthContext();

export const AuthProvider: FC<AuthProviderProps> = ({ user, children }) => {
  const [userInfo, setUserInfo] = useState<UserDetail | undefined>(user);

  return (
    <AuthContextProvider value={{ userInfo, setUserInfo }}>
      <div className="container mx-auto space-y-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">
            <Link href="/">Logo</Link>
          </h1>

          <div className="space-x-2">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        </div>

        <div className="py-4">{children}</div>
      </div>
    </AuthContextProvider>
  );
};
