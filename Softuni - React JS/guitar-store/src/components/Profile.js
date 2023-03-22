import React, { useState } from 'react';
import app from '../Utils/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Profile() {

  const [username, setUsername] = useState('');
  const auth = getAuth(app);
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
    setUsername(user.email);
    } else {
      navigate('/login');
    }
  });
return (
    <div>
      <p>Logged in as: {username}</p>
    </div>
  );

}
export default Profile;