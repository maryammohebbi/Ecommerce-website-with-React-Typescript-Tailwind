import newArrivals from '../../../public/newArrivals.png'
import { HiArrowRight } from 'react-icons/hi'
import 'swiper/css'
import 'swiper/css/navigation'
import { logos } from './data'
import { Link } from 'react-router-dom'

const Brands: React.FC = () => {
  return (
    <div className="container mt-12 px-16">
      <img src={newArrivals} alt="" />
      <div className=" mt-9 flex flex-col lg:flex-row w-full justify-between gap-x-[70px] items-center gap-y-[90px]">
        {logos.map((logo) => (
          <div key={logo.id} className="flex flex-col  gap-y-3 ">
            <img
              src={logo.imgUrl}
              alt={logo.title}
              className="w-full lg:w-full  object-contain  lg:h-[400px] h-[500px] rounded-md"
            />
            <div className="flex w-full justify-between">
              <div className="flex flex-col gap-y-7">
                <p className="text-secondary-100">{logo.title}</p>
                <span className="text-primary-0">Explore Now!</span>
              </div>
              <Link to={'/products'}>
                <HiArrowRight className='text-secondary-100' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands
