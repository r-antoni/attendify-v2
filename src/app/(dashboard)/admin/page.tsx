import AttendanceChart from "@/components/attendance-chart"
import CountChart from "@/components/count-chart"
import FinanceChart from "@/components/finance-chart"
import UserCard from "@/components/user-card"

const AdminPage = () => {
  return (
    <main className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left Side */}
      <div className="flex flex-col gap-8 w-full lg:w-2/3">
      {/* User card */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <UserCard type="students"/>
          <UserCard type="teachers"/>
          <UserCard type="parents"/>
          <UserCard type="staffs"/>
        </div>
        {/* Middle Chart */}
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/3 h-[450px]">
                <CountChart />
            </div>
            <div className="w-full lg:w-2/3 h-[450px]">
                <AttendanceChart />
            </div>
        </div>
        {/* Bottom Chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
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