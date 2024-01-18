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
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

