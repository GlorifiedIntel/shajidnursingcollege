import Link from "next/link";
import { Button } from "@/components/ui/button";


export default async function Home() {
    return (
     <main className=" flex flex-col justify-center h-full text-center max-w-5xl mx-auto my-10">
        <h1 className="text-5xl font-bold gap-6 shajid-title">Shajid Royal College</h1>
        <h3 className="text-3xl font-bold">of Nursing & Midwifery</h3>
        <p className="mb-5 digit-2">App Version: 1.0</p>
        <p>
         <Button className="shajid-button" asChild>
          <Link href="/dashboard">
            Sign In
          </Link>
          </Button>
        </p>
      </main>
  );
}
