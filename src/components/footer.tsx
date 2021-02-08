import React from "react";

const Footer = () => {
  return (
    <aside className="d-flex flex-column col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 offset-md-1 offset-lg-1 offset-xl-1 offset-xxl-1 mt-4 footer">
      <div className="d-flex flex-row justify-content-between align-items-center p-2 add-name">
        <span className="title-primary">
          Is there anyone else you would want us to add?
        </span>
        <button>Submit a Name</button>
      </div>
      <footer>
        <div className="d-flex flex-row justify-content-between">
          <div className="about-us">
            <ul className="d-flex flex-row justify-content-between">
              <li>Terms and conditions</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="d-flex flex-row justify-content-between social-network">
            <button>Follow us</button>
            <a href="https://www.facebook.com/">
              <span className="rot rot-facebook" />
            </a>
            <a href="https://twitter.com/">
              <span className="rot rot-twitter" />
            </a>
          </div>
        </div>
      </footer>
    </aside>
  );
};

export default Footer;
