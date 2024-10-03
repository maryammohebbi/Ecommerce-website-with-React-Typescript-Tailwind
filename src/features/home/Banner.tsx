
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'

type Props = {
  description: string
  banner: string
  image: string
  bannerColor:string
  order:string
}

const Banner: React.FC<Props> = ({ description, banner, image,bannerColor,order }) => {
  return (
    <div className={`banner-base mt-8 ${bannerColor}`}>
      <div className={`flex flex-col justify-around py-8 ${order}`}>
        <div>
          <div className="h-full flex justify-between flex-col transition-all  ">
            <div className="w-[280px] h-[85px]  bg-secondary-0 mb-[-76px] ml-[-10px] rotate-[-3deg] transition-all"></div>
            <img src={banner} alt="image" className="z-[1000] object-cover" />
            <div className="w-[370px] h-[80px] bg-primary-100 mt-[-168px] z-0 xl:mt-[-195px] rotate-[-3deg]  mr-3 transition-all"></div>
          </div>
        </div>
        <div className="mt-[40px]">
          <p className="text-secondary-100 text-8 font-light">{description}</p>
        </div>
        <Link to="/products ">
          <button className="  btn text-secondary-0">SHOP NOW</button>
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
