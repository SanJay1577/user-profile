import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Dashboard } from "./Dashboard";

export function HomePage({ userList, setUserList }) {
  //mapping and executing the delete button logic by filtering the remaining value and setting it in the hook.
  return (
    <div>
      <div>
        <h2>Zen Team Board</h2>
      </div>
      <div className="userlist">
        {userList.map(
          ({ name, position, YearsOfExperience, email, phone }, index) => (
            <Dashboard
              id={index}
              name={name}
              position={position}
              YearsOfExperience={YearsOfExperience}
              email={email}
              phone={phone}
              deleteButton={<IconButton
                variant="contained"
                color="error"
                onClick={() => {
                  const deleteIndex = index;
                  const remainingUsers = userList.filter(
                    (userList, idx) => deleteIndex !== idx
                  );
                  setUserList(remainingUsers);
                }}
              >
                <DeleteIcon />
              </IconButton>} />
          )
        )}
      </div>
    </div>
  );
}
