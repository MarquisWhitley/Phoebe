import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarStyling/NavbarStyling.scss"
import Button from "../ButtonComponents/Button.component";
import { ButtonProps } from "../ButtonComponents/Button.component";
import { ButtonSizes } from "../ButtonComponents/ButtonSizes";
import { ButtonStyles } from "../ButtonComponents/ButtonStyles";

const Navigation = () => {

    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem('token');
        navigate("/signin")
    }

    const signInBtn: ButtonProps = {
        btnSize: ButtonSizes.SMALL,
        btnStyle: ButtonStyles.PRIMARY,
        disabled: false,
        action: () => signOut(),
        children: "Sign Out",
     };
  
   return (
      <Fragment>
        <div className="navbar">
         <Navbar bg='dark' variant='dark'>
            <Container>
               <Navbar.Brand>Phoebe</Navbar.Brand>
               <Nav className='me-auto'>
                  <Link to='/' className="navLink">Home</Link>

                  <Link to='/signin' className="navLink">Sign In</Link>

                  <Link to='/about' className="navLink">About</Link>

                  <Button {...signInBtn}/>
               </Nav>
            </Container>
         </Navbar>
        </div>
      </Fragment>
   );
};

export default Navigation;

{
   /* <Navbar bg='dark' variant='dark'>
            <Container>
               <Link to='/'>
                  <Navbar.Brand>Phoebe</Navbar.Brand>
               </Link>
               <Nav className='me-auto'>
                  <Link to='/'>
                     <Nav.Link>Home</Nav.Link>
                  </Link>
                  <Link to='/signin'>
                     <Nav.Link>Sign In</Nav.Link>
                  </Link>
                  <Link to='/about'>
                     <Nav.Link>About</Nav.Link>
                  </Link>
               </Nav>
            </Container>
         </Navbar> */
}
