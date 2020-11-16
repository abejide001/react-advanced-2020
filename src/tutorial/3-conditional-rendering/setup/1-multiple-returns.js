import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";


const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then(resp => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        } else {
          setIsError('error loading')
        }
      })
      .then(user => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch(error => {
        setIsError('error' + error.message)
      })
  }, [])

  if (isError) {
    return (
      <div>
        <h1>{isError}</h1>
      </div>
    );
  }

  if (isLoading) {
    return <h2>isLoading...</h2>;
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;
