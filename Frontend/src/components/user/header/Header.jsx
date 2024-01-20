import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function Header() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Logo</MDBNavbarBrand>
          <MDBNavbarBrand href='#'></MDBNavbarBrand>
          <MDBNavbarBrand href='#'></MDBNavbarBrand>
          <MDBNavbarBrand href='#'></MDBNavbarBrand>
          <MDBNavbarBrand href='#'></MDBNavbarBrand>
          <MDBNavbarBrand href='#'></MDBNavbarBrand>
          <MDBNavbarBrand href='#'></MDBNavbarBrand>
          <MDBNavbarBrand href='#'>Home</MDBNavbarBrand>
          <MDBNavbarBrand href='#'>Profile</MDBNavbarBrand>
          <MDBNavbarBrand href='#'>Login</MDBNavbarBrand>
          <MDBNavbarBrand href='#'>Signup</MDBNavbarBrand>
          <MDBNavbarBrand href='#'>Logout</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

