import { auth } from "@/auth";
import SignOutButton from "../components/SignOutButton";
// import SignOutButton from "../components/SignOutButton";

export default async function About() {
  const session = await auth();
  console.log(session);

  return (
    <div className="p-12 flex flex-col justify-center items-center">
      <div className="flex justify-around items-center">
        <h2 className="text-xl font-semibold">
          About the Signed in User!
        </h2>
        {/* <SignOutButton /> */}
      </div>
      {/* Access User Session Info */}
      {
        session?.user && (
          <div className="py-4">
            <p className="py-2">Logged in User</p>
            <p className="py-2">Name: {session.user.name}</p>
            <p className="py-2">Email: {session.user.email}</p>
            {/* <img src={session.user.image} alt={session.user.name} /> */}
          </div>
        )
      }
      <SignOutButton />
    </div>
  )
}