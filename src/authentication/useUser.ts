import { useState, useEffect } from 'react';
import { getUser, User } from '../features/services/authService';

const useUser = (): [User | null, (user: User | null) => void] => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch token and userId directly inside the useEffect to avoid stale dependencies
    const token = localStorage.getItem('userToken');
    const userId = localStorage.getItem('userId');

    const fetchUser = async () => {
      if (token && userId) {
        try {
          const fetchedUser = await getUser(Number(userId));
          setUser(fetchedUser);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      } else {
        // Clear user if token or userId are missing
        setUser(null);
      }
    };

    fetchUser();
  }, []); // Empty dependency array to fetch only on mount

  return [user, setUser];
};

export default useUser;
