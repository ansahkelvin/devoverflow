"use client"
import AuthForm from "@/components/forms/AuthForm";
import {SignUpSchema} from "@/lib/validations";

const SignUpPage = () => {
    return <AuthForm
        schema={SignUpSchema}
        formType={"SIGN_UP"}
        defaultValues={{ email: "", password: "", name: "", username: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
}

export default SignUpPage