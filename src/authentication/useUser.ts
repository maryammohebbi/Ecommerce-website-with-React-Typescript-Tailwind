import { useState, useEffect } from 'react';
import { getUser, User } from '../features/services/authService';

const useUser = (): { user: User | null; loading: boolean } => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // New loading state
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
      setLoading(false); // Data fetching is complete
    };

    fetchUser();
  }, [token, userId]);

  return { user, loading };
};

export default useUser;
