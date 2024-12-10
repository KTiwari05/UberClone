import React, { useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <div>
      <UserDataContext.provider>{children}</UserDataContext.provider>
    </div>
  );
};

export default UserContext;
