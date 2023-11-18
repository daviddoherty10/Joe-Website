import "./footer.css";

function Footer() {
  return (
    <>
      <div id="footer-container">
        <h2>Contact</h2>
        <p>Phone: 123456789</p>
        <p>Email: lasdkfj@gmail.com</p>
        <div id="copyright">
          <p>©{new Date().getFullYear()} JDwyer Tennis. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
