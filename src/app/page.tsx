import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import UserCard from "./components/UserCard/UserCard";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <>
          <h1 className="text-center p-5 text-2xl">Selamat Datang</h1>
          <div className="grid justify-items-center">
            <UserCard user={session.user} />
          </div>
        </>
      ) : (
        <h1>Login</h1>
      )}
    </>
  );
}
