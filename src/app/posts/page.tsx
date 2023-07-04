import Link from "next/link";
import React from "react";
import { PostDetail } from "@/types";

async function getData(): Promise<PostDetail[]> {
  console.log("Call list posts");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PostsScreen() {
  const posts = await getData();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="col-span-3 border border-gray-200 rounded-lg p-2"
          >
            <h3 className="text-lg truncate">{post.title}</h3>
            <p className="text-base line-clamp-3">{post.body}</p>
          </div>
        ))}
      </div>
      <div>
        <Link
          href="/users"
          className="block hover:text-blue-600 hover:underline"
        >
          Go to users
        </Link>
      </div>
    </div>
  );
}
