import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand ps-3 fs-2" href="#">
        <span className="fw-bold fst-italic">D</span>{" "}
        <span className="text-info fst-italic fw-bold">TRAVELS</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <Link className=" fst-italic nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="fst-italic nav-link" to="bookandsearch">
              Book And Saerch
            </Link>
          </li>

          <li className="nav-item">
            <Link className="fst-italic nav-link " to="travelcommunity">
              Travel community
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
