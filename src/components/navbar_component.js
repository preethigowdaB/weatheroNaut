import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LOGO from "../assets/LOGO.png";
function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="/" className="ms-3">
        <img src={LOGO} alt="LOGO" width={33} className="me-2" />
        WeathroNaut
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="Graph">Today Temperature</Nav.Link> */}
          {/* <Nav.Link href="weeklyforecast">Weekly Forecast</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
