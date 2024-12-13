import Link from "next/link";

import {Button} from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  return (
   <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900" asChild>
              <Link href={ROUTES.ASK_QUESTION}>Ask a question</Link>
          </Button>
      </section>

       <section className="mt-11">
            LOCAL SEARCH
       </section>


       

   </>
  );
}
