import Link from "next/link";
import Image from "next/image";



export default function DashboardLayout({

  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="flex h-screen">
      {/*Left*/}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[16%] bg-sky-500/50">
        <Link href="/" className="flex items-center justify-center p-2">
        <Image src="/shajid-logo.png" alt="logo" width={100} height={100} />
        <span className="hidden lg:block">Shajid Royal College</span>
        </Link>
      </div>

      {/*Right*/}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[84%] bg-blue-500">Right Panel</div>


    </div>
}