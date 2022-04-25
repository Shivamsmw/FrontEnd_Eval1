import React from "react";
import { RegisterContext } from "../Context/RegisterContext";
export default function Rejistration_2() {
  const { handleData2 } = React.useContext(RegisterContext);
  const [formData, setformData] = React.useState({
    address: "",
    pincode: "",
  });

  const handle = e => {
    let id = e.target.id;
    let value = e.target.value;

    setformData({ ...formData, [id]: value });
  };
  const { address, pincode } = formData;
  const handleSubmit = e => {
    e.preventDefault();
    handleData2(formData.address, formData.pincode);
    setformData({
      address: "",
      pincode: "",
    });
  };
  return (
    <div>
      <h1>Form data 2 </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the address"
          onChange={handle}
          id="address"
          value={address}
        />
        <br />
        <input
          type="number"
          placeholder="Enter the pincode"
          onChange={handle}
          id="pincode"
          value={pincode}
        />
        <br />

        <br />
        <input
          type="submit"
          value="submit"
          disabled={formData.address === "" || formData.pincode === ""}
        />
      </form>
    </div>
  );
}
