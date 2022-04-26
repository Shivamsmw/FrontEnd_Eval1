import React from "react";
import { RegisterContext } from "../Context/RegisterContext";
export default function Users() {
  const { data } = React.useContext(RegisterContext);
  console.log(data);
  return (
    <div>
      <h1>here is the address and pincode of the registered users</h1>
      <ol>
        {data.map(value => (
          <li key={value.id}>
            Address:{value.address}
            &nbsp; &nbsp; &nbsp; Pincode:{value.pincode}
          </li>
        ))}
      </ol>
    </div>
  );
}
