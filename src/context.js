import { createContext} from "react";

 const Context = createContext({
    cart: [],
    setCart: () => {},
  });
  

export default Context;