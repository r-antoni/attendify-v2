import UserCard from "@/components/user-card"

const AdminPage = () => {
  return (
    <main className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left Side */}
      <div className="w-full lg:w-2/3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <UserCard type="students"/>
          <UserCard type="teachers"/>
          <UserCard type="parents"/>
          <UserCard type="staffs"/>
        </div>
        
      </div>
      {/* Right Side */}
      <div className="w-full lg:w-1/3">
        r
      </div>
    </main>
  )
}

export default AdminPage