import React from "react";
import { NavLink } from "react-router-dom";

function AdminNavBar() {
  return (
    <nav>
      <NavLink
        to="/question-form"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        New Question
      </NavLink>
      <NavLink
        to="/question-list"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        View Questions
      </NavLink>
    </nav>
  );
}

export default AdminNavBar;
