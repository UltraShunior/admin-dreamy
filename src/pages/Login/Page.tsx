import { SignedOut, SignIn } from "@clerk/clerk-react";

export function LoginPage() {
  return (
    <>
      <header className="mt-[calc(50vh-20rem)] flex justify-center items-center p-4">
        <SignedOut>
          <SignIn />
        </SignedOut>
      </header>
    </>
  );
}

export default LoginPage;
