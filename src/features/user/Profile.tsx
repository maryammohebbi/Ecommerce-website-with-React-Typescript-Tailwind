import React, { useEffect, useState } from 'react'
import UpdateUser from './UpdateUser'
import { User } from '../services/authService'
import useEditUser from './useEditUser'
import useUser from '../../authentication/useUser'

const Profile: React.FC = () => {
  const { user } = useUser()
  const [open, setOpen] = useState(false)
  const { updateUser } = useEditUser()
  const [updatedUser, setUpdatedUser] = useState<User | null>(user)

  useEffect(() => {
    if (user) {
      setUpdatedUser(user)
    }
  }, [user])

  const handleUpdateUser = async (newUser: User) => {
    if (newUser.id) {
      // const updated = await updateUserApi(newUser.id, newUser)
      updateUser({ userId: newUser.id, data: newUser })
      setUpdatedUser(newUser)
    }
  }

  return (
    <div className="container">
      <h3 className="text-center p-2 font-bold text-3xl text-green-700 mb-6">
        - {updatedUser?.name?.firstname}'s profile -
      </h3>
      <div className="border-2 border-secondary rounded-xl text-xl p-5 max-w-sm sm:max-w-md md:max-w-2xl mx-auto shadow-2xl">
        <div className="text-textColor flex gap-x-3 border-b-2 border-gray-500 mb-8">
          <span>Firstname:</span> <p>{updatedUser?.name?.firstname}</p>
        </div>

        <div className="text-textColor flex gap-x-3 border-b-2 border-gray-500 mb-8">
          <span>Lastname:</span> <p>{updatedUser?.name?.lastname}</p>
        </div>

        <div className="text-textColor flex gap-x-3 border-b-2 border-gray-500 mb-8">
          <span>Username:</span> <p>{updatedUser?.username}</p>
        </div>

        <div className="text-textColor flex gap-x-3 border-b-2 border-gray-500 mb-8">
          <span>Email:</span> <p>{updatedUser?.email}</p>
        </div>

        <div className="text-textColor flex gap-x-3 border-b-2 border-gray-500 mb-8">
          <span>Phone number:</span> <p>{updatedUser?.phone}</p>
        </div>

        <div className="text-textColor flex gap-x-3 border-b-2 border-gray-500 mb-8">
          <span>Address:</span>
          <div className="pl-5">
            <span className="flex">
              City: &nbsp; <p>{updatedUser?.address?.city} </p>
            </span>
            <span className="flex">
              Street: &nbsp; <p>{updatedUser?.address?.street}</p>
            </span>
            <span className="flex">
              Number: &nbsp; <p>{updatedUser?.address?.number}</p>
            </span>
            <span className="flex">
              Zipcode: &nbsp; <p>{updatedUser?.address?.zipcode}</p>
            </span>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 bg-purple-500 hover:bg-purple-600 duration-500 transition-all rounded-lg mx-auto block shadow-2xl border-2 border-secondary"
        >
          EDIT PROFILE
        </button>
      </div>
      <UpdateUser
        open={open}
        onOpen={setOpen}
        user={updatedUser}
        onUpdate={handleUpdateUser}
      />
    </div>
  )
}

export default Profile
