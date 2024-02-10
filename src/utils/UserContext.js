import { createContext } from "react";

const UserContext = createContext({user: 'No default user', setUserName: () => {}});

export default UserContext;