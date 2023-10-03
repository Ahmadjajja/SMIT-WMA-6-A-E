import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container-fluid py-2 bg-primary">
        <div className="row">
          <div className="col">
            <p className="mb-0 text-center text-white">
              &copy; {year}. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
