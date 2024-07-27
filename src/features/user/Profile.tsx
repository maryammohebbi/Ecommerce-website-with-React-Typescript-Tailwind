import React from 'react'
import useUser from '../../authentication/useUser'

const Profile: React.FC = () => {
  const user = useUser()
  return (
    <div className="container">
      <h3 className="text-center p-2 font-bold text-3xl text-green-700 mb-6">
        - {user?.name.firstname}'s profile -
      </h3>
      <form className="border-2 border-secondary rounded-xl text-xl p-5 max-w-sm sm:max-w-md md:max-w-2xl mx-auto shadow-2xl">
        <div className="text-textColor flex gap-x-3 border-b-2 border-gray-500 mb-8">
          <span>Firstname:</span> <p>{user?.name.firstname}</p>
        </div>

        <div className="text-textColor flex gap-x-3 border-b-2 border-gray-500 mb-8">
          <span>Lastname:</span> <p>{user?.name.lastname}</p>
        </div>

        <div className="text-textColor flex gap-x-3 border-b-2 border-gray-500 mb-8">
          <span>Username:</span> <p>{user?.username}</p>
        </div>

        <div className="text-textColor flex gap-x-3 border-b-2 border-gray-500 mb-8">
          <span>Email:</span> <p>{user?.email}</p>
        </div>

        <div className="text-textColor flex gap-x-3 border-b-2 border-gray-500 mb-8">
          <span>Phone number:</span> <p>{user?.phone}</p>
        </div>

        <div className="text-textColor flex gap-x-3 border-b-2 border-gray-500 mb-8">
          <span>Address:</span>
          <div className="pl-5">
            <span className="flex">
              City: &nbsp; <p>{user?.address.city} </p>
            </span>
            <span className="flex">
              Street: &nbsp; <p>{user?.address.street}</p>
            </span>
            <span className="flex">
              Number: &nbsp; <p>{user?.address.number}</p>
            </span>
            <span className="flex">
              Zipcode: &nbsp; <p>{user?.address.zipcode}</p>
            </span>
          </div>
        </div>

        <button className="px-4 py-2 bg-purple-400 rounded-md mx-auto block">
          EDIT PROFILE
        </button>
      </form>
    </div>
  )
}

export default Profile
