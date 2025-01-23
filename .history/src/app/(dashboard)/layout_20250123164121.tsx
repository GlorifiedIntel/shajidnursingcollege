


export default function DashboardLayout({

  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="flex h-screen">
      {/*Left*/}
      <div className="w-1/6 bg-dark">Left Panel</div>

      {/*Right*/}
      <div className="w-5/6  bg-blue-50">Right Panel</div>


    </div>
}