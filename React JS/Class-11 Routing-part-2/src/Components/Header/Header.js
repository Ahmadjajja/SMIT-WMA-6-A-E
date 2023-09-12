import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const loginHandler = async () => {
    // const userData = await "asdalsfjlasdfjlklkasdflk;lk;";
    const usersData = [
      { email: "ahmad@gmail.com", password: "120" },
      { email: "ahmad1@gmail.com", password: "121" },
      { email: "ahmad2@gmail.com", password: "122" },
      { email: "ahmad3@gmail.com", password: "123" },
      { email: "ahmad4@gmail.com", password: "124" },
      { email: "ahmad5@gmail.com", password: "125" },
      { email: "ahmad6@gmail.com", password: "126" },
      { email: "ahmad7@gmail.com", password: "127" },
      { email: "ahmad8@gmail.com", password: "128" },
      { email: "ahmad9@gmail.com", password: "129" },
    ];

    const user = { email: "ahmad8@gmail.com", password: "128" };
    let userLoggedInData = usersData.filter((userData) => {
      return user.email == userData.email && user.password == userData.password;
    });
    console.log(userLoggedInData);

    if (userLoggedInData.length > 0) {
      // navigate to dashboard page
      navigate("dashboard");
    } else {
      alert("Invalid Input!!");
    }
  };
  return (
    <>
      <div style={{ backgroundColor: "#CFF4FC" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="alert alert-info alert-dismissible fade show mb-0 ps-0"
                role="alert"
              >
                <strong>Hey Buddy!</strong> You should check our{" "}
                <a href="menu.html" className="alert-link text-decoration-none">
                  Happy Menu
                </a>{" "}
                .
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header id="navbar" className="position-sticky top-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              Pizza Kitchen
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link to={"dashboard"} className="nav-link" href="menu.html">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => navigate("contact")}
                    className="nav-link"
                    href="contact.html"
                    style={{ cursor: "pointer" }}
                  >
                    Contact
                  </button>
                </li>
              </ul>
              <button
                className="btn btn-outline-success"
                onClick={loginHandler}
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
