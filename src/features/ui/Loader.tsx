const Loader: React.FC = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr,1fr,1fr] w-full gap-6  px-[100px]    ">
      <div className="loader-style">
        <div className="skeleton-image "></div>
        <div className="flex flex-col mt-[53px] w-full ">
          <div className="skeleton-header w-[230px] h-[30px] rounded-lg mx-auto "></div>
          <div className="skeleton-body w-full">
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
          </div>
          <div className="skeleton-footer"></div>
        </div>
      </div>
      <div className="loader-style ">
        <div className="skeleton-image "></div>
        <div className="flex flex-col mt-[53px] w-full ">
          <div className="skeleton-header m-auto  w-[230px] h-[30px] rounded-lg mx-auto "></div>
          <div className="skeleton-body w-full">
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
          </div>
          <div className="skeleton-footer"></div>
        </div>
      </div>
      <div className="loader-style ">
        <div className="skeleton-image "></div>
        <div className="flex flex-col mt-[53px] w-full ">
          <div className="skeleton-header w-[230px] h-[30px] rounded-lg  mx-auto"></div>
          <div className="skeleton-body w-full">
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
          </div>
          <div className="skeleton-footer"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
