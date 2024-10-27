import React from 'react'
import { GiJewelCrown } from 'react-icons/gi'
import { FcElectronics } from 'react-icons/fc'
import { GiClothes } from 'react-icons/gi'
import { PiDressDuotone } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const icons = [
  {
    title: 'electronics',
    icon: (
      <FcElectronics className="w-[80%] h-[80%] p-2 bg-secondaryBg rounded-full" />
    ),
  },
  {
    title: 'jewelery',
    icon: (
      <GiJewelCrown className="w-[80%] h-[80%] p-2 bg-secondaryBg rounded-full" />
    ),
  },
  {
    title: "men's clothing",
    icon: (
      <GiClothes className="w-[80%] h-[80%] p-2 bg-secondaryBg rounded-full" />
    ),
  },
  {
    title: "women's clothing",
    icon: (
      <PiDressDuotone className="w-[80%] h-[80%] p-2 bg-secondaryBg rounded-full" />
    ),
  },
]

interface Categories {
  categories: string[]
}

const Category: React.FC<Categories> = ({ categories }) => {
  const findAndRenderIcon = (categoryTitle: string) => {
    const matchingIcon = icons.find(
      (icon) => icon.title.toLowerCase() === categoryTitle.toLowerCase()
    )

    if (matchingIcon) {
      return matchingIcon.icon
    }
  }

  return (
    <div className="flex justify-around px-8 h-[186px] items-center border-secondary-100">
      {categories.map((category) => (
        <Link to={`/products/${category}`} key={category}>
          <div className="lg:w-[7rem] w-[5rem] h-[5rem] lg:h-[7rem] relative flex flex-col items-center">
            {findAndRenderIcon(category)}
            <span className=" text-black text-[14px] whitespace-nowrap hidden md:block">
              {category}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Category
