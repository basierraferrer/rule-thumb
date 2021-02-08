import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="menu">
      {/* <BrowserRouter> */}
      <Navbar color="transparent" expand="md">
        <NavbarBrand href="/">Rule of Thumb.</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink href="/pastTrial">
                Past Trials
                {/* <Link to="/pastTrials">Past Trials</Link> */}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/howItWorks">
                How It Works
                {/* <Link to="/howWorks">How It Works</Link> */}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logIn">
                Log In / Sign Up
                {/* <Link to="/logIn">Log In / Sign Up</Link> */}
              </NavLink>
            </NavItem>
          </Nav>
          <Searcher />
        </Collapse>
      </Navbar>
    </header>
  );
};

const Searcher = () => {
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const togglePoppover = () => setPopoverOpen(!popoverOpen);
  return (
    <div className="searcher">
      <span className="rot rot-search" role="button" id="Popover1" />
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={togglePoppover}
      >
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default Menu;
