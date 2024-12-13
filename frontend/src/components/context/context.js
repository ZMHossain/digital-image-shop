import { createContext } from "react";

export const userContext = createContext({
  loginInfo: null,
  setLoginInfo: () => {},
});
