import React from "react";
import { useEffect ,useContext} from "react";
// import { useState } from "react";
import Spinner from "../layout/assets/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../context/github/GithubContext";

function UserResult() {
  const {users,loading} =useContext(GithubContext)
  // const [users, setUsers] = useState([]);
  // const [loading, setLaoding] = useState(true);
  useEffect(() => {
    // fetchUsers();
  });
  // const fetchUsers = async () => {
  //   const response = await fetch(`https://api.github.com/users`);
  //   const data = await response.json();
  //   console.log(data);
  //   setUsers(data);
  //   setLaoding(false);
  // };
  if(!loading){
      
      return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols- md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      );
  }else{
    return(
    <Spinner/>
  )}
}

export default UserResult;
