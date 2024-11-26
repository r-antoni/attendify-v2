import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 shadow-md'>
        {/* Search Bar */}
        <div className='hidden md:flex items-center gap-2 px-3 py-1 text-xs rounded-full ring-1 ring-gray-400'>
            <Image src="/search.png" alt='search' width={14} height={14}/>
            <input type="text" placeholder='Search...' className='w-[200px] p-1 bg-transparent outline-none'/>
        </div>
        {/* Icon & User */}
        <div className='flex items-center justify-end gap-6 w-full'>
            <div className='flex items-center justify-center bg-slate-200 rounded-full w-7 h-7 cursor-pointer'>
                <Image src="/message.png" alt='message' width={20} height={20}/>
            </div>
            <div className='flex items-center justify-center bg-slate-200 rounded-full w-7 h-7 cursor-pointer'>
                <Image src="/announcement.png" alt='announcement' width={20} height={20}/>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs leading-3 font-medium'>John</span>
                <span className='text-[10px] text-gray-500 text-right'>Admin</span>
            </div>
            <Image src="/avatar.png" alt='avatar' width={36} height={36} className='rounded-full'/>
        </div>
    </div>
  )
}

export default Navbar