import React from 'react'
import { TbPackageExport } from 'react-icons/tb'
import { TbBrandDaysCounter } from 'react-icons/tb'
import { SiTrustedshops } from 'react-icons/si'
import { MdCropOriginal } from 'react-icons/md'
import { BsCashCoin } from 'react-icons/bs'
import Title from '../ui/Title'

const Services: React.FC = () => {
  return (
    <div className="container">
      <div className=" p-5 flex flex-col items-center">
        <Title title="Services" />
        <div className="flex justify-between flex-wrap gap-2 w-full">
          <div className="p-5 border-2 border-slate-300 flex flex-col items-center gap-y-4 w-[12rem] rounded-md shadow-2xl">
            <TbPackageExport className="w-24 h-16 text-textColor" />
            <span className="text-textColor text-lg font-semibold">
              Express Post
            </span>
          </div>
          <div className="p-5 border-2 border-slate-300 flex flex-col items-center gap-y-4 w-[12rem] rounded-md shadow-2xl">
            <TbBrandDaysCounter className="w-24 h-16 text-textColor" />
            <span className="text-textColor text-lg font-semibold">24/7</span>
          </div>
          <div className="p-5 border-2 border-slate-300 flex flex-col items-center gap-y-4 w-[12rem] rounded-md shadow-2xl">
            <SiTrustedshops className="w-24 h-16 text-textColor" />
            <span className="text-textColor text-lg font-semibold">
              7 days return
            </span>
          </div>
          <div className="p-5 border-2 border-slate-300 flex flex-col items-center gap-y-4 w-[12rem] rounded-md shadow-2xl">
            <MdCropOriginal className="w-24 h-16 text-textColor" />
            <span className="text-textColor text-lg font-semibold">
              Original
            </span>
          </div>
          <div className="p-5 border-2 border-slate-300 flex flex-col items-center gap-y-4 w-[12rem] rounded-md shadow-2xl">
            <BsCashCoin className="w-24 h-16 text-textColor" />
            <span className="text-textColor text-lg font-semibold">
              Cash Pay
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
