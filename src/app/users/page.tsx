import Link from "next/link";
import React from "react";
import { UserDetail } from "@/types";

async function getData(): Promise<UserDetail[]> {
  console.log("Call list users");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UsersScreen() {
  const users = await getData();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="col-span-3 border border-gray-200 rounded-lg p-2"
          >
            <h3 className="text-lg truncate">{user.name}</h3>
            <div className="space-y-1">
              <p className="text-base truncate">{user.username}</p>
              <p className="text-base truncate">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link
          href="/posts"
          className="block hover:text-blue-600 hover:underline"
        >
          Go to posts
        </Link>
      </div>
    </div>
  );
}
