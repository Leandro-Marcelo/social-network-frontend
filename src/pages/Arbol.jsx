import React from "react";

const Arbol = () => {
  return <div>Arbol</div>;
};

export default Arbol;

/* 


  useEffect(() => {
    console.log(`ejecuto useEffect de getUsers`);
    let isCancelled = false;
    const getUsers = async () => {
      console.log(`getUsers se ejecutró`, typeof user.loggedUser.username);
      const usersList = await aGet(
        `api/users/all/users?username=${user.loggedUser.username}`
      );
      if (!isCancelled) {
        console.log(`PONGO LA DATA?`);
        console.log(usersList.data);
        setUsersList(usersList.data);
        console.log(usersList);
      }
    };

    if (user?.loggedUser?.username) {
      console.log(user.loggedUser.username);
      getUsers();
    }
    console.log(`àhora si pone la data`, usersList);

    return () => {
      isCancelled = true;
    };
  }, [user?.loggedUser?.username]);
















*/
