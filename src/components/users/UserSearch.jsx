import React from "react";
import { useContext, useState } from "react";
import GithubContext from "../context/github/GithubContext";
import AlertContext from "../context/github/alert/AlertContext";

function UserSearch() {
  const [text, setText]  = useState('');
  const { users, searchUsers,handleClear } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("please enter somthing",'error');
    } else {
      searchUsers(text);
      setText('');
    }
  };
  
  return (
    <div className="grid grid-cols-1 xl:grid-cols2 lg:grid-cols-2 md:grid-cols-2 mb-4 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 tounded-l-none w-6 btn btn-lg"
              >
                go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
