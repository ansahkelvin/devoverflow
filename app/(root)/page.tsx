import {auth, signOut} from "@/auth";
import {Button} from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
    const session = await auth()
  return (
   <>
       <h1>Hello world</h1>
       <p className="mt-24 text-white">{session?.user?.email}</p>

       <form action={
          async () => {
               "use server"
               await signOut({
                   redirectTo: ROUTES.SIGN_IN
               });
           }
       }>
          <Button>
              Sign Out
          </Button>
       </form>

   </>
  );
}
