"use server";

import Login from "../../components/authenticationComponents/Login/Login";
import Link from "next/link";

function login() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "100px",
        }}
      >
        <Login></Login>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ paddingRight: "4px" }}>
          Don't have an acount create one  
        </h4>
        <Link href="./create-account">here.</Link>
      </div>
    </>
  );
}
export default login;
