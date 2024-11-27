"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 24,
  },
  {
    name: 'Tue',
    present: 30,
    absent: 34,
  },
  {
    name: 'Wed',
    present: 20,
    absent: 44,
  },
  {
    name: 'Thu',
    present: 27,
    absent: 37,
  },
  {
    name: 'Fri',
    present: 18,
    absent: 46,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-xl h-full p-4'>
        <div className='flex items-center justify-between'>
            <h1>Attendance</h1>
            <Image src="/moreDark.png" alt='more' width={20} height={20} />
        </div>
            <ResponsiveContainer width="100%" height="90%">
            <BarChart
            width={500}
            height={300}
            data={data}
            barSize={20}
            >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
            <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
            <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
            <Tooltip />
            <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}} />
            <Bar dataKey="present" fill="#2488CA" legendType='circle' radius={[10,10,0,0]}/>
            <Bar dataKey="absent" fill="#FAE27C" legendType='circle' radius={[10,10,0,0]}/>
            </BarChart>
            </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart