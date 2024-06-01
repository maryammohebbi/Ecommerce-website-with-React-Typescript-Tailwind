// import React from 'react'
import { GiJewelCrown } from "react-icons/gi"
import { FcElectronics } from "react-icons/fc"
import { GiClothes } from "react-icons/gi"
import { PiDressDuotone } from "react-icons/pi"

const icons = [
  {
    title: "electronics",
    icon: <FcElectronics className="w-[80%] h-[80%] p-2 bg-secondaryBg rounded-full"/>,
  },
  {
    title: "jewelery",
    icon: <GiJewelCrown className="w-[80%] h-[80%] p-2 bg-secondaryBg rounded-full"/>,
  },
  {
    title: "men's clothing",
    icon: <GiClothes className="w-[80%] h-[80%] p-2 bg-secondaryBg rounded-full"/>,
  },
  {
    title: "women's clothing",
    icon: <PiDressDuotone className="w-[80%] h-[80%] p-2 bg-secondaryBg rounded-full"/>,
  },
]

interface Categories {
  categories: string[]
}

function Category({categories}: Categories) {

  const findAndRenderIcon = (categoryTitle: string) => {
    const matchingIcon = icons.find(
      (icon) => icon.title.toLowerCase() === categoryTitle.toLowerCase()
    )
  
    if (matchingIcon) {
      return matchingIcon.icon;
    }
  }


  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-x-40 md:h-screen ">
        {categories.map((category) => (
          <div
            key={category}
            className="w-[8rem] h-[8rem] md:w-[15rem] md:h-[15rem] relative flex flex-col items-center"
          >
            {findAndRenderIcon(category)}
            <span className="">{category}</span>
          </div>
        ))}
      </div>
  )
}

export default Category