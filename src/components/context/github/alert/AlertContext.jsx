import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";
const AlertContext = createContext();




export const AlertProvider = ({ children }) => {

  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  
  const setAlert = async (msg, type) => {
    dispatch(
      {
        type: "SET_ALERT",
        payload: { msg, type },
      },
      setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000)
    );
  };
  
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
