import Image from "next/image";
import Link from "next/link";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <div className="w-full max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 mt-10">
        <Image
          className="w-40 h-40 mb-3 rounded-full shadow-lg"
          src={user?.image || ""}
          alt={user?.name || "user account image"}
          width={100}
          height={100}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user?.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user?.email}
        </span>
        <div className="flex mt-4 md:mt-6">
          <Link
            href="/api/auth/signout"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Signout
          </Link>
        </div>
      </div>
    </div>
  );
}
