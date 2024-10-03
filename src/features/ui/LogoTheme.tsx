import vector from '../../../public/Vector.png'
import fashion from '../../../public/FASHION.png'

function LogoTheme() {
  return (
    <div className=" flex gap-x-[13px] items-center  ">
      <img src={vector} className=":w-[31.26px] xl:h-[29px]" alt="image" />
      <img src={fashion} className="w-[200px]  h-8 " alt="image" />
    </div>
  )
}

export default LogoTheme
