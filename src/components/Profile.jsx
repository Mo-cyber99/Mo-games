import React, { useEffect, useState } from "react";
import { fetchUsers } from "../utils/API";
import "../css/Profile.css";

export const Profile = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetchUsers().then(({users}) => {
        console.log(users);
      setProfile(users);
    });
  }, []);
  return (
		<div>
	
			<ul className="profile">
				{profile.map((user) => {
					return (
						<li key={user.username}>
							<h2 className="profile-title">{user.username}</h2>
							<img
								src={user.avatar_url}
								alt={user.username}
								className="profile-img"
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}