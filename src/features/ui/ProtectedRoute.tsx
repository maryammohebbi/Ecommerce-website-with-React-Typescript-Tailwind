import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import useUser from '../../authentication/useUser'

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, loading } = useUser() // Adjusted to use loading state
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !user) {
      toast.error('Please login first') // Show toast notification
      navigate('/auth')
    }
  }, [user, loading, navigate])

  // Show a loading spinner or nothing while loading
  if (loading) {
    return <div>Loading...</div> // Replace with a proper loading indicator if needed
  }

  return user ? <>{children}</> : null
}

export default ProtectedRoute
