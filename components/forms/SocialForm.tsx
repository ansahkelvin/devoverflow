"use client"
import Image from "next/image";
import {signIn} from "next-auth/react";

import {Button} from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import {toast} from "@/hooks/use-toast";





const SocialAuthForm = () => {
    const buttonClass = "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

    const handleSignIn =async (provider: "google" | "github") => {
        try{ 
           await signIn(provider, {
               callbackUrl: ROUTES.HOME,
               redirect: false
           })
        }catch (error) {
            toast({
                title: "Sign In Failed",
                description: error instanceof Error ? error.message : 'An error occurred during sign in',
                variant: "destructive"
            });
            console.log(error)
        }
    }
    return (
        <div className="mt-10 flex flex-wrap gap-2.5">
            <Button className={buttonClass} onClick={() => handleSignIn("github")}>
                <Image
                    src={"/icons/github.svg"}
                    alt={"Github Icon"}
                    height={20}
                    width={20}
                    className="invert-colors mr-2.5 object-contain"
                    />
                <span>Login with github</span>
            </Button>
            <Button className={buttonClass} onClick={() => handleSignIn("google")}>
                <Image
                    src={"/icons/google.svg"}
                    alt={"Google Logo"}
                    height={20}
                    width={20}
                    className="mr-2.5 object-contain"
                />
                <span>Login with Google</span>
            </Button>
        </div>
    )
}


export default SocialAuthForm