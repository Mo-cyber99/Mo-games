import React, { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../utils/API";
import { LoggedInContext, UserContext } from "../contexts/User";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Profile.css";

export const Profile = () => {
  // eslint-disable-next-line
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);
  const { currUser, setCurrUser } = useContext(UserContext);
  const [profile, setProfile] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsError(false);
    fetchUsers()
      .then(({ users }) => {
        setProfile(users);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const changeProfile = (e) => {
    setCurrUser(e.target.value);
    setIsLoggedIn(true);
  };
  if (isError) return <p className="error">ERROR please try again</p>;
  return (
	<>
	   {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" size="lg" color="white" />
        </div>
      ) : null}
    <div>
		<section>
      <h3 className="user-link">Current User: {currUser}</h3> <br></br>
      <Link className="user-link" to="/new-profile">
        Create a new account
      </Link>
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
			  <p><strong>Name: <em>{user.name}</em></strong></p>
			  <button value={user.username} onClick={changeProfile}>Select User</button>
			  {currUser === user.username ? 'Logged In!': null}
            </li>
          );
        })}
      </ul>
		</section>
    </div>
		</>
  );
};
