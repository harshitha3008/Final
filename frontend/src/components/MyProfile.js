import React, { useEffect, useState } from 'react';

const MyProfile = ({ username }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/user/profile/${username}`);
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          throw new Error('Failed to fetch profile');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        setProfile(null);  // Or show an error message to the user
      }
    };
    

    if (username) {
      fetchProfile();
    }
  }, [username]);

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div>
      <h2>Welcome, {profile.username}</h2>
      {/* Display user profile information */}
      <p>Favorite Recipes: {profile.favorites?.join(', ') || 'None yet'}</p>
    </div>
  );
};

export default MyProfile;
