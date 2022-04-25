import React from "react";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div>
      <h1>This is home page</h1>
      <Link to="registration/one">
        <button>Register the user</button>
      </Link>
    </div>
  );
}
