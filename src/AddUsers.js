import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/IconButton";
import Input from "@mui/material/Input";

export function AddUsers({ users, setUserList }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //defining the input items to new useState setValues.
  return (
    <div className="add-movie">
      <Input
        placeholder="Employee-Name"
        value={name}
        onChange={(event) => setName(event.target.value)} />
      <Input
        placeholder="Designation"
        value={position}
        onChange={(event) => setPosition(event.target.value)} />
      <Input
        placeholder="Experinece in Years"
        value={experience}
        onChange={(event) => setExperience(event.target.value)} />
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)} />
      <Input
        placeholder="Phone Number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)} />
      <div>
        <Button
          variant="contained"
          color="success"
          //Onclick of the function we are using spread operator to add the value to the exixting maped users.
          onClick={() => {
            const newUsers = {
              name: name,
              position: position,
              YearsOfExperience: experience,
              email: email,
              phone: phone,
            };
            console.log(newUsers);
            setUserList([...users, newUsers]);
            history.push("/");
          }}
        >
          Add-User
        </Button>
      </div>
    </div>
  );
}
