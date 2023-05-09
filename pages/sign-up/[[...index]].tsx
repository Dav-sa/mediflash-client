import { SignUp } from "@clerk/nextjs"

import { Layout } from "@/components/layout"

export const SignUpPage = () => {
  return (
    <Layout>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </Layout>
  )
}

export default SignUpPage
