import React from "react";
import { RegisterContext } from "../Context/RegisterContext";
import { Link } from "react-router-dom";
export default function Rejistration_1() {
  const { handleData1 } = React.useContext(RegisterContext);
  const [formData, setformData] = React.useState({
    name: "",
    age: "",
  });

  const handle = e => {
    let id = e.target.id;
    let value = e.target.value;

    setformData({ ...formData, [id]: value });
  };
  const { name, age } = formData;
  const handleSubmit = e => {
    e.preventDefault();
    handleData1(formData.name, formData.age);
    setformData({
      name: "",
      age: "",
    });
  };
  return (
    <div>
      <h1>Form data1</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the name"
          onChange={handle}
          id="name"
          value={name}
        />
        <br />
        <input
          type="number"
          placeholder="Enter the age"
          onChange={handle}
          id="age"
          value={age}
        />
        <br />

        <br />
        <Link to="/registration/two">
          <input
            type="submit"
            value="submit"
            disabled={formData.name === "" || formData.age === ""}
          />
        </Link>
      </form>
    </div>
  );
}
