import Login from "@/components/Login/Login";

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
        <h4 style={{paddingRight:'4px'}}>Don't have an acount create one </h4>
        <a href="./create-account">here.</a>
      </div>
    </>
  );
}
export default login;
