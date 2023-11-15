import CreateAccount from "@/components/createAccount/createAccount";

function createAccount() {
  return (
    <>
      <div style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
        <CreateAccount></CreateAccount>
      </div>
    </>
  );
}

export default createAccount;
