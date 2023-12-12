import CreateAccount from "../../components/authenticationComponents/createAccount/createAccount";

function createAccount() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <CreateAccount></CreateAccount>
      </div>
    </>
  );
}

export default createAccount;
