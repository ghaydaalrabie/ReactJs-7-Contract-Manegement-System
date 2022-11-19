import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  function logout() {
    sessionStorage.clear();
    navigate("/Login");
  }

  return (
    <div>
      <div>
  
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <a className="navbar-brand logo-image" href="index.html">
            <img src="https://api.logo.com/api/v2/images?logo=logo_4080aa0b-92e7-48ad-9ba7-51cda094b4b8&format=webp&margins=0&quality=60&width=500&background=transparent&u=1668853042"
 alt="alternative" />
          </a>
          {/* Mobile Menu Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-awesome fas fa-bars" />
            <span className="navbar-toggler-awesome fas fa-times" />
          </button>
          {/* end of mobile menu toggle button */}
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="menu-active">
                {" "}
                <Link className="navbar-brand" to="/">
                  Home
                </Link>
              </li>

              {sessionStorage.getItem("username") !== null ? (
                <>
                  <li>
                    <Link className="navbar-brand" to="/Contracts">
                      Contarcts
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-brand" to="/Profile">
                      {sessionStorage.getItem("username")}{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="logout navbar-brand" onClick={logout}>
                      LOGOUT
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="navbar-brand" to="/Register">
                    Register
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-brand" to="/Login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>{" "}
        {/* Header */}
        {/* end of header */}
        {/* end of header */}
      </div>
    </div>
  );
}

export default Header;
