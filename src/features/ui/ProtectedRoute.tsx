import React, { useEffect } from 'react'
import useUser from '../../authentication/useUser'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user, navigate])

  return user ? <>{children}</> : null
}

export default ProtectedRoute
