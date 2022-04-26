import { createContext } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
export const RegisterContext = createContext();
export const RegisterContextProvider = ({ children }) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [data, setData] = React.useState([]);

  const handleData1 = (fname, fage) => {
    setName(fname);
    setAge(fage);
    console.log(fage, fname);
  };

  const handleData2 = (faddress, fpincode) => {
    setAddress(faddress);
    setPincode(fpincode);
    console.log(faddress, fpincode);
    if (faddress !== "" && fpincode !== "") {
      let pvot = {
        address: faddress,
        pincode: fpincode,
        id: uuidv4(),
      };
      setData([...data, pvot]);
    }
  };

  return (
    <RegisterContext.Provider
      value={{ data, name, age, address, pincode, handleData1, handleData2 }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
