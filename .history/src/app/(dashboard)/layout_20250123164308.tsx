


export default function DashboardLayout({

  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="flex h-screen">
      {/*Left*/}
      <div className="w-1/6 bg-red-500">Left Panel</div>

      {/*Right*/}
      <div className="w-5/6  bg-blue-500">Right Panel</div>


    </div>
}