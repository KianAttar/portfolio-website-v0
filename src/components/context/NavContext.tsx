import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const NavContext = createContext<{
  activeLinkId: string;
  setActiveLinkId: Function | Dispatch<SetStateAction<string>>;
}>({
  activeLinkId: "",
  setActiveLinkId: () => {},
});

const NavProvider = ({ children }: { children: ReactNode }) => {
  const [activeLinkId, setActiveLinkId] = useState("");

  const value = {
    activeLinkId,
    setActiveLinkId,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export default NavProvider;
