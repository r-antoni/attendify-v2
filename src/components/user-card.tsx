import Image from "next/image"

const UserCard = ({type}: {type:string}) => {
  return (
    <div className="flex-1 rounded-2xl min-w-[130px] odd:bg-purple even:bg-yellow p-4">
        <div className="flex items-center justify-between">
            <span className="text-xs px-2 py-1 bg-white rounded-full text-green-500">2024/2025</span>
            <Image src="/more.png" alt="more" width={20} height={20}/>
        </div>
        <h1 className="text-2xl text-gray-800 font-semibold my-4">1234</h1>
        <h2 className="text-sm font-medium capitalize text-gray-500">{type}</h2>
    </div>
  )
}

export default UserCard