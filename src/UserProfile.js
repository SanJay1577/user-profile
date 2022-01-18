import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export function UserProfile({ users }) {
  const { id } = useParams();
  const user = users[id];
  //desining the component of userprofile documents,
  return (
    <div className="user-details">
      <h2>Zen-Employee-Profile</h2>
      <h3>{user.name}</h3>
      <p>Position : {user.position}</p>
      <p>Years Of Experience : {user.YearsOfExperience}</p>
      <p>Email : {user.email}</p>
      <p>Phone Number : {user.phone}</p>
    </div>
  );
}
