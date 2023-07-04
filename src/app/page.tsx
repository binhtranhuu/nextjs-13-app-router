import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Link href="/posts" className="block hover:text-blue-600 hover:underline">
        Post
      </Link>
      <Link href="/users" className="block hover:text-blue-600 hover:underline">
        User
      </Link>
    </div>
  );
}
