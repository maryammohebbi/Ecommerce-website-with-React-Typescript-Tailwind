import { useState, useEffect } from 'react';
import { getUser, User } from '../features/services/authService';

const useUser = (): User | null => {
  const [user, setUser] = useState<User | null>(null);
  const token = localStorage.getItem('userToken');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchUser = async () => {
      if (token && userId) {
        try {
          const user = await getUser(Number(userId));
          setUser(user);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
    };

    fetchUser();
  }, [token, userId]);

  return user;
};

export default useUser;