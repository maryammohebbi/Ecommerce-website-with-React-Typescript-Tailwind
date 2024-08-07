import React from 'react'
import useUser from '../../authentication/useUser'
import InputField from '../ui/InputField'
import { useForm } from 'react-hook-form'
import { updateUserApi, User } from '../services/authService'
interface UpdateUserProps {
  open: boolean
  onOpen: (open: boolean) => void
}
const UpdateUser: React.FC<UpdateUserProps> = ({ open, onOpen }) => {
  const user = useUser()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstname: user?.name.firstname,
      lastname: user?.name.lastname || '',
      username: user?.username || '',
      email: user?.email || '',
      phone: user?.phone || '',
      city: user?.address.city || '',
      street: user?.address.street || '',
      number: user?.address.number || '',
      zipcode: user?.address.zipcode || '',
    },
  })

  const onSubmit = async (data: User) => {
    if (user) {
      const updatedUser = await updateUserApi(user.id, {
        name: {
          firstname: data.name.firstname,
          lastname: data.name.lastname,
        },
        username: data.username,
        email: data.email,
        phone: data.phone,
        address: {
          city: data.address.city,
          street: data.address.street,
          number: data.address.number,
          zipcode: data.address.zipcode,
        },
      })
      console.log('Updated user:', updatedUser)
      onOpen(false) // Close the modal
    }
  }

  return (
    <div>
      {open && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-slate-600 opacity-50 z-10"></div>
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="relative max-w-sm lg:max-w-xl w-full h-[80%] bg-secondaryBg p-4 rounded-md shadow-lg">
              <button
                onClick={() => onOpen(false)}
                className="absolute -top-9 right-0 w-8 h-8 bg-slate-100 p-1 rounded-full text-black font-bold shadow-xl z-30"
              >
                X
              </button>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-1 h-full overflow-y-scroll p-2"
              >
                <InputField
                  name="firstname"
                  label="Firstname"
                  type="text"
                  register={register}
                  errors={errors}
                  validationSchema={{
                    required: 'Firstname is necessary',
                  }}
                />
                <InputField
                  name="lastname"
                  label="Lastname"
                  type="text"
                  register={register}
                  errors={errors}
                  validationSchema={{
                    required: 'Lastname is necessary',
                  }}
                />
                <InputField
                  name="username"
                  label="Username"
                  type="text"
                  register={register}
                  errors={errors}
                  validationSchema={{
                    required: 'Username is necessary',
                  }}
                />
                <InputField
                  name="email"
                  label="Email"
                  type="text"
                  register={register}
                  errors={errors}
                  validationSchema={{
                    required: 'Email is necessary',
                  }}
                />
                <InputField
                  name="phone"
                  label="Phone"
                  type="text"
                  register={register}
                  errors={errors}
                  validationSchema={{
                    required: 'Phone is necessary',
                  }}
                />

                <div className="text-textColor flex gap-x-3 mb-4">
                  <span>Address:</span>
                  <div className="pl-5">
                    <InputField
                      name="city"
                      label="City"
                      type="text"
                      register={register}
                      errors={errors}
                      validationSchema={{
                        required: 'City is necessary',
                      }}
                    />
                    <InputField
                      name="street"
                      label="Street"
                      type="text"
                      register={register}
                      errors={errors}
                      validationSchema={{
                        required: 'Street is necessary',
                      }}
                    />

                    <InputField
                      name="number"
                      label="Number"
                      type="number"
                      register={register}
                      errors={errors}
                      validationSchema={{
                        required: 'Number is necessary',
                      }}
                    />
                    <InputField
                      name="zipcode"
                      label="Zipcode"
                      type="number"
                      register={register}
                      errors={errors}
                      validationSchema={{
                        required: 'Zipcode is necessary',
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-green-600 rounded-lg shadow-2xl w-24 p-2 ">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default UpdateUser
