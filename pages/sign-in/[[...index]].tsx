import { SignIn } from "@clerk/nextjs"

import { Layout } from "@/components/layout"

const SignInPage = () => (
  <Layout>
    <div className="container my-6  flex justify-center border-solid border-2 border-slate-500 ">
      <SignIn></SignIn>
    </div>
  </Layout>
)
export default SignInPage
