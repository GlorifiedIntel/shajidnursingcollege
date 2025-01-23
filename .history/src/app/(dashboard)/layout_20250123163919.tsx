


export default function DashboardLayout({

  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="flex h-screen">
      {/*Left*/}
      <div className="w-1/6">Left Panel</div>

      {/*Right*/}
      <div className="w-5/6">Right Panel</div>


    </div>
}