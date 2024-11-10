import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = ({ userId }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch user profile
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`/api/profile/${userId}`);
                setProfile(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchProfile();
    }, [userId]);

    // Handle profile update
    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`/api/profile/${userId}`, profile);
            setProfile(response.data);
            alert('Profile updated successfully');
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>User Profile</h1>
            <form onSubmit={handleUpdate}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={profile.name || ''}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={profile.email || ''}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                </label>
                <br />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
