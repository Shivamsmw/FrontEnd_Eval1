import { createContext } from "react";
import React from "react";
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
  };
  if (name && age && address && pincode) {
    let pvot = {
      name: name,
      age: age,
      address: address,
      pincode: pincode,
    };
    setData([...data, pvot]);
  }
  return (
    <RegisterContext.Provider
      value={{ data, name, age, address, pincode, handleData1, handleData2 }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
