"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-2 text-white">
      <ul className="flex text-xl space-x-5">
        <li className="font-bold">Atnlie</li>
        <li className=" text-blue-400">
          <Link href="/">Home</Link>
        </li>
        <li className=" text-blue-400">
          <Link href="/products">Products</Link>
        </li>
        <li className=" text-blue-400">
          <Link href="/about">About</Link>
        </li>
        <div className="bg-red-800 p-2 text-white text-xs border-spacing-0 rounded-xl flex justify-items-end">
          <button
            type="button"
            onClick={() => signOut()}
            className="cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </ul>
    </nav>
  );
}
