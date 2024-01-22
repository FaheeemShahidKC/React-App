import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
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
          <MDBNavbarBrand onClick={()=>{
            navigate('/')
          }} href='#'>Home</MDBNavbarBrand>
          <MDBNavbarBrand onClick={()=>{
            navigate('/profile')
          }} href='#'>Profile</MDBNavbarBrand>
          <MDBNavbarBrand onClick={()=>{
            navigate('/login')
          }} href='#'>Login</MDBNavbarBrand>
          <MDBNavbarBrand onClick={()=>{
            navigate('/signup')
          }} href='#'>Signup</MDBNavbarBrand>
          <MDBNavbarBrand onClick={()=>{
            navigate('/login')
          }} href='#'>Logout</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

