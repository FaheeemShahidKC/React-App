import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { userSignup } from '../../../api/userApi';

import {
     MDBContainer,
     MDBCard,
     MDBCardBody,
     MDBCardImage,
     MDBRow,
     MDBCol,
     MDBInput
}
     from 'mdb-react-ui-kit';

function Signup() {

     // const navigate = useNavigate()
     const [name, setName] = useState()
     const [email, setEmail] = useState()
     const [phone, setPhone] = useState()
     const [password, setPassword] = useState()
     const [error, setError] = useState()
     const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     const handdleSignup = async (e) => {
          e.preventDefault()

          try {
               if (name.length < 3) {
                    return setError("Name must contain 3 letters")
               } else if (!emailPattern.test(email)) {
                    return setError("Invalid email format")
               } else if (phone.length == 10) {
                    return setError("Invalid mobile number format")
               } else if (password.length < 4) {
                    return setError("Password must contain 4 character")
               }

               const response = await userSignup({
                    name, email, phone, password
               })

               console.log(response,"iuytrtyu");

          } catch (error) {
               console.log("handdle signup error");
          }
     }
     return (
          <MDBContainer className='my-5'>
               <MDBCard>

                    <MDBRow className='g-0 d-flex align-items-center'>

                         <MDBCol md='4'>
                              <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
                         </MDBCol>

                         <MDBCol md='8'>

                              <MDBCardBody>
                                   <h1 style={{ fontWeight: 'bold' }}>Sign up</h1>
                                   <MDBInput onChange={(e) => {
                                        setName(e.target.value)
                                   }} wrapperClass='mb-4' label='User name' id='form1' type='text' />
                                   <MDBInput onChange={(e) => {
                                        setEmail(e.target.value)
                                   }} wrapperClass='mb-4' label='Email address' id='form2' type='email' />
                                   <MDBInput onChange={(e) => {
                                        setPhone(e.target.value)
                                   }} wrapperClass='mb-4' label='Mobile number' id='form3' type='number' />
                                   <MDBInput onChange={(e) => {
                                        setPassword(e.target.value)
                                   }} wrapperClass='mb-4' label='Password' id='form4' type='password' />


                                   {/* <div className="d-flex justify-content-evenly mx-4 mb-4">
                                        <a href="!#">Forgot password?</a>
                                   </div> */}
                                   <p style={{color:'red'}}>{error}</p>
                                   <Button onClick={handdleSignup} className='mb-4 w-100'>Sign in</Button>


                              </MDBCardBody>

                         </MDBCol>

                    </MDBRow>

               </MDBCard>
          </MDBContainer>
     );
}

export default Signup;