import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState()
  
  const getUsers = async () => {

    const resp = await fetch(url);
    const users = await resp.json();
    setUser(users);
    setLoading(true)
    console.log(users);
  };

  useEffect(() => {
    getUsers()
  }, []);
  
  if (!loading) {
    return <img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt=""/>
  }
  return (
    <>
      <h3>GitHub Users</h3>
      <ul className="users">
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
            </div>
          </li>
        );
      })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
