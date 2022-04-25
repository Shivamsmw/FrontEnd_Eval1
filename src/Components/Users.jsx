import React from "react";
import { RegisterContext } from "../Context/RegisterContext";
export default function Users() {
  const { data } = React.useContext(RegisterContext);

  return (
    <div>
      <ul>
        {data.map(val => (
          <li>val</li>
        ))}
        );
      </ul>
    </div>
  );
}
