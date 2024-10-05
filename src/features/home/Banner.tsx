import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import { scrollToTop } from '../../utils/topOfPage'
type Props = {
  description: string
  banner: string
  image: string
  bannerColor: string
  order: string
  borderColor:string
}

const Banner: React.FC<Props> = ({
  description,
  banner,
  image,
  borderColor,
  bannerColor,
  order,
}) => {
  return (
    <div
      className={`banner-base mt-8 ${bannerColor} shadow-lg shadow-secondary-100`}
    >
      <div className={`flex flex-col justify-around py-8 ${order}`}>
        <div>
          <picture className="h-full flex justify-between flex-col transition-all  ">
            <div className="w-[280px] h-[85px]  bg-secondary-0 mb-[-76px] ml-[-10px] rotate-banner"></div>
            <img src={banner} alt="image" className="z-[1000] object-cover" />
            <div className="w-[370px] h-[80px] bg-primary-100 border-primary-100 mt-[-168px] z-0 xl:mt-[-195px] mr-3 rotate-banner "></div>
          </picture>
        </div>
        <div className="mt-[40px]">
          <p className="text-secondary-100 text-8 font-light">{description}</p>
        </div>
        <Link to="/products ">
          <button
            className={`text-secondary-0 btn font-bold shadow-md  ${borderColor} border-2 `}
            onClick={scrollToTop}
          >
            SHOP NOW
          </button>
        </Link>
      </div>

      <img
        src={image}
        alt="image"
        className="object-contain w-[566px]   mt-[92px]   "
      />
    </div>
  )
}

export default Banner
