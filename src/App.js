import './App.css';
import { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import { HomePage } from "./HomePage";
import { UserProfile } from "./UserProfile";
import { AddUsers } from './AddUsers';
import Input from "@mui/material/Input";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const users = [
    {
      name: "Arun Prakash",
      position: "CEO & Founder",
      YearsOfExperience: 7,
      email: "123@yahoo.com",
      phone: 8664513214,
    },
    {
      name: "BalaMurugan",
      position: "CMO & Co-Founder",
      YearsOfExperience: 7,
      email: "abc@gamil.com",
      phone: 7664513214,
    },
    {
      name: "Maheswaran",
      position: "Relationship Manager",
      YearsOfExperience: 7,
      email: "123@yahoo.com",
      phone: 6564513214,
    },
    {
      name: "Divya ",
      position: "System-Admin",
      YearsOfExperience: 7,
      email: "123@yahoo.com",
      phone: 9664513214,
    },
    {
      name: "Ragav",
      position: "Teacher",
      YearsOfExperience: 7,
      email: "123@yahoo.com",
      phone: 7664513214,
    },
  ];

  //Setting Users as a Hook to Update and change the data in need. 
  //Using History to get the required Router. 

  const [userList, setUserList] = useState(users);
  const history = useHistory();
  return (
    <div className="App">
      <div className="app-bar">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Button color="inherit" onClick={() => history.push("/")}>
              Home
            </Button>

            <Button
              sx={{ marginLeft: "auto" }}
              color="inherit"
              onClick={() => history.push("/addusers")}
            >
              Add-Users
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      <div className="route-items">
        <Switch>
          <Route exact path="/">
            <HomePage userList={userList} setUserList={setUserList} />
          </Route>

          <Route path="/addusers">
            <AddUsers users={userList} setUserList={setUserList} />
          </Route>

          <Route path="/edit/:id">
            <EditUsers
              users={users}
              profile={userList}
              setUserList={setUserList}
            />
          </Route>

          <Route path="/:id">
            <UserProfile users={userList} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function EditUsers({ users, setUserList }) {
  const { id } = useParams();
  const user = users[id];
  return <UpdateUser user={user} setUserList={setUserList} users={users} />;
}

function UpdateUser({ user, users, setUserList }) {
  //filtering the selected user alone and storing it in edited users

  const editedUsers = users.filter((users) => users !== user);
  const history = useHistory();
  const [name, setName] = useState(user.name);
  const [position, setPosition] = useState(user.position);
  const [experience, setExperience] = useState(user.YearsOfExperience);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const editUser = () => {
    const newUsers = {
      name: name,
      position: position,
      YearsOfExperience: experience,
      email: email,
      phone: phone,
    };
    //add the new edited value to the remainng user and deleting the old user
    setUserList([...editedUsers, newUsers]);
    history.push("/");
  };

  return (
    <div className="add-movie">
      <Input
        placeholder="Employee-Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        placeholder="Designation"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
      />
      <Input
        placeholder="Experinece in Years"
        value={experience}
        onChange={(event) => setExperience(event.target.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        placeholder="Phone Number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <div>
        <Button variant="contained" color="success" onClick={editUser}>
          Edit User
        </Button>
      </div>
    </div>
  );
}


export default App;
 