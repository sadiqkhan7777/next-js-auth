import { SessionWrapper } from "@/components/SessionWrapper";
import { auth } from "@/lib/auth";
import SignInPage from "@/components/login/LoginComponents";
import SignOutPage from "@/components/login/SignOutComponents";

export default async function Home() {
  const session = await auth ()
  const isAuthentication = !!session?.user

  return(
    <div>
      <SessionWrapper>
        <SignInPage />
        <SignOutPage />
      </SessionWrapper>
    </div>
  )
}