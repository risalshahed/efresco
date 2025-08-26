import { auth } from "@/auth";
// import SignOutButton from "../components/SignOutButton";

export default async function About() {
  const session = await auth();
  console.log(session);

  return (
    <div className="p-12">
      <div className="flex justify-around items-center">
        <h2 className="text-xl font-semibold">
          About the Signed in User!
        </h2>
        {/* <SignOutButton /> */}
      </div>
      {/* Access User Session Info */}
      {
        session?.user && (
          <div>
            Logged in User
            <p>Name: {session.user.name}</p>
            <p>Email: {session.user.email}</p>
            {/* <img src={session.user.image} alt={session.user.name} /> */}
          </div>
        )
      }
    </div>
  )
}