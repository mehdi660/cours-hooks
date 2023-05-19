import React, { useContext } from "react";
import { UserNumber } from "./AppContext";

const OtherComponents = () => {
  const userNumber = useContext(UserNumber);

  console.log(userNumber);

  return <div>{userNumber} </div>;
};

export default OtherComponents;
