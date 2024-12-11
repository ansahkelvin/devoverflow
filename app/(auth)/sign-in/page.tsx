"use client"
import AuthForm from "@/components/forms/AuthForm";
import {SignInSchema } from "@/lib/validations";


const SignInPage = () => {
    return <AuthForm schema={SignInSchema}
                     formType={"SIGN_IN"}
                     defaultValues={{ email: "", password: "" }}
                     onSubmit={(data) => Promise.resolve({ success: true, data })}
    />

}

export default SignInPage