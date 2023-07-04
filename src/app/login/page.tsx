"use client";

import { useAuth } from "@/contexts/auth";
import React from "react";

export default function LoginScreen() {
  const { userInfo } = useAuth();

  return (
    <>
      {userInfo && (
        <div className="py-4">
          <p className="text-base truncate">User name: {userInfo?.email}</p>
          <p className="text-base truncate">
            User username: {userInfo?.username}
          </p>
          <p className="text-base truncate">User email: {userInfo?.email}</p>
        </div>
      )}
    </>
  );
}
