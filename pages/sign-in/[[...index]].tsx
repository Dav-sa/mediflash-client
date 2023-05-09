import { SignIn } from "@clerk/nextjs"

import { Layout } from "@/components/layout"

const SignInPage = () => (
  <Layout>
    <div className="container flex-col items-center justify-center md:py-10 ">
      <SignIn></SignIn>
    </div>
  </Layout>
)
export default SignInPage
